require("isomorphic-fetch");

require("dotenv").config();
const argon2 = require("argon2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { json } = require("express");

const app = express();

app.set("port", 8080);

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
var Pool = require("pg").Pool;
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "alumni",
};

/* Call to submit a new alumni form to the database
ACCEPTS ARGS:
  string firstName
  string middleName,
  string lastName,
  string occupation
  string email
  string emailUpdates (whether they want to receieve updates) (backend parses into bool)
  string personalUpdates
  string gradYear (backend parses)
  string major
RETURN
  success message
*/
app.post("/submit", async (req, res) => {
  console.log(req.body)
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const occupation = req.body.occupation;
  const email = req.body.email;
  const emailUpdates = req.body.emailUpdates; //todo check this
  const personalUpdates = req.body.personalUpdates;
  const gradYear = parseInt(req.body.gradYear);
  const major = req.body.major;
  let query,result,originalId,pendingId; //vars
  try {
    console.log(gradYear)
    //check if email already exists in pending
    //delete it
    query = "DELETE FROM pending where email = $1"
    result = await pool.query(query, [email]);

    //insert pending form
    query = "insert into pending (firstName, middleName, lastName, gradYear, major, occupation, email, emailUpdates, personalUpdates) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
    result = await pool.query(query, [firstName, middleName, lastName, gradYear, major, occupation, email, emailUpdates, personalUpdates]);
    console.log(result);

    //now check if the form just added matches one in the alumni DB
    query = "SELECT id FROM alumni where (firstName = $1 AND middleName = $2 AND lastName = $3) OR email = $4";
    result = await pool.query(query, [firstName,middleName,lastName,email]);
    console.log("checked if form matched")
    //if alumni with matching name exists in database
    if (result.rowCount > 0) { 
      originalId = result.rows[0].id;
      //get the ID of the pending form just submitted
      query = "SELECT id FROM pending where email = $1";
      result = await pool.query(query, [email]);
      pendingId = result.rows[0].id;
      //mark as duplicate
      query = "INSERT into duplicates (pendingId,alumniId) VALUES ($1,$2)";
      result = await pool.query(query,[pendingId,originalId])
      res.json({ msg: "created as duplicate" });
    } else {
      res.json({ msg: "created" });
    }
  }
  catch (err) {
    console.log("ERROR " + err);
  }
});

/*
Admin Login
Checks admin credentials
ACCEPTS
  string username
  string password
RETURNS
  a sucess or failure message
*/
app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    let query = "SELECT username,password FROM admin WHERE username = $1";
    let result = await pool.query(query, [username]);
    console.log(result.rowCount);
    if (result.rowCount > 0) {
      console.log(result.rows[0].password);
      if(await argon2.verify(result.rows[0].password, password)){
        res.json({ status: "success", screenname: result.rows[0].screenname });
      } else {
        res.json({ error: "Password Incorrect" });
      }
    } else {      
        res.json({ error: "Username not found" });  
    }
  } catch (err) {
    console.log("ERROR " + err);
  }
});

/*
Create account
creates an admin account
ACCEPTS
  string username 
  string password
RETURNS
 sucess or failure message
*/
app.post("/create", async (req, res) => {
  let hash;
  const username = req.body.username;
  const password = req.body.password;
  try {
    hash = await argon2.hash(password);
    console.log("HASH" + hash);
    const query =
      "INSERT INTO admin (username, password) VALUES ($1, $2)";
    const result = await pool.query(query, [username, hash]);
    //console.log(result);
    if (result.rowCount == 1) {
      console.log(username);
      res.json({ status: "success", username: username });
    } else {
      res.json({ error: "User not created" });
    }
  } catch (err) {
    console.log("ERROR " + err);
    if (err.message.search("duplicate") != -1) {
      res.json({ error: "Username taken" });
    }
  }
});

/* TEST FUNCTION (not used in application)
returns all alumni
*/
app.get('/getAlumni', async (req, res) => {
  try {
    let template = "Select * from Alumni";
    const dbresponse = await pool.query(template,[]);
    const results = dbresponse.rows.map((row) => {return row});
    if(results.length > 0){
      res.json(
        results
      )
    }
    console.log(results);
  } catch (err){
  console.log(err);
  }
}); 

/* TEST FUNCTION (not used in application)
returns all pending
*/
app.get('/getPending', async (req, res) => {
  console.log("pending")
  try {
    let template = "Select * from pending";
    const dbresponse = await pool.query(template,[]);
    const results = dbresponse.rows.map((row) => {return row});
      res.json(
        results)
    console.log(results);
  } catch (err){
  console.log(err);
  }
}); 

/* TEST FUNCTION (not used in application)
returns all admins
*/
app.get('/getAdmins', async (req, res) => {
  console.log("admins")
  try {
    let template = "Select * from admin";
    const dbresponse = await pool.query(template,[]);
    const results = dbresponse.rows.map((row) => {return row});
      res.json(
        results
      )
    console.log(results);
  } catch (err){
  console.log(err);
  }
}); 

/* TEST FUNCTION (not used in application)
deletes all pending forms
*/
app.post('/deletePending', async (req, res) => {
  try {
    let template = "delete from pending";
    const dbresponse = await pool.query(template,[]);
    const results = dbresponse.rows.map((row) => {return row});
      res.json(
        results
      );
    } catch (err){
      console.log(err);
    }
}); 
  
/*
Search database
searches database for alumni of specific criteria
ACCEPTS
  string searchterm
RETURNS
  list of alumni
*/
app.get('/search', async (req, res) => {
  let searchTerm = req.query.searchTerm;
//5 queries to return all the results from all the searches, return row wherever a match 
//need to store in an array of objects
  console.log(`Search for ${searchTerm}`);
//get logged in user zip if there is one

  try {
    let template;
    if (Number.isInteger(parseInt(searchTerm))) {
      template = `select id,firstName,middleName,lastName,occupation,email,gradYear,major from alumni where gradYear = $1`;
    } else {
      template = `select id,firstName,middleName,lastName,occupation,email, gradYear,major from alumni
      where firstName ilike '%'||$1||'%' 
      OR middleName ilike '%'||$1||'%' 
      OR lastName ilike '%'||$1||'%' 
      OR occupation ilike '%'||$1||'%'
      OR major ilike '%'||$1||'%'`;
    }
    console.log(searchTerm);
    const dbresponse = await pool.query(template,[searchTerm]);
    const results = dbresponse.rows.map((row) => {return row});
      res.json(
        results
      )
    console.log(results);
  } catch (err){
  console.log(err);
  }
}); 

/*
Approve form
sends the form to the alumni DB
removes it from the pending alumni tables
ACCEPTS 
  pending alumni ID 
RETURNS
  success or failure message
*/
app.post('/approve', async (req, res) => {
  let id = parseInt(req.body.id);
  try {
    //see if the pending alum is a duplicate
    let template = "SELECT * FROM duplicates WHERE pendingId = $1";
    let results = await pool.query(template,[id]);
    let duplicate = false;
    let duplicateId;
    //if there is a duplicate entry
    if (results.rowCount > 0) {
      duplicate = true;
      duplicateId = results.rows[0].alumniid;
    }
    //first get info from pending table
    template = "SELECT * FROM pending WHERE id = $1";
    results = await pool.query(template,[id]);
    if (results.rowCount < 1) {
      res.json({ msg: "error: no pending alumni found" });
    }
    const firstName = results.rows[0].firstname;
    const middleName = results.rows[0].middlename;
    const lastName = results.rows[0].lastname;
    const occupation = results.rows[0].occupation;
    const email = results.rows[0].email;
    const emailUpdates = results.rows[0].emailupdates; 
    const personalUpdates = results.rows[0].personalupdates;
    const gradYear = results.rows[0].gradyear;
    const major = results.rows[0].major;
    if (duplicate) {
      //update the alumni with the new fields
      query = "UPDATE alumni SET firstName = $1, middleName = $2, lastName = $3, gradYear = $4, major = $5, occupation = $6, email = $7, emailUpdates = $8, personalUpdates = $9 WHERE id = $10";
      result = await pool.query(query, [firstName, middleName, lastName, gradYear, major, occupation, email, emailUpdates, personalUpdates,duplicateId]);
      console.log("updated");
    } else {
      //insert this alumni info into the alumni table
      template = "insert into alumni (firstName, middleName, lastName, gradYear, major, occupation, email, emailUpdates, personalUpdates) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
      results = await pool.query(template, [firstName, middleName, lastName, gradYear, major, occupation, email, emailUpdates, personalUpdates]);
      console.log("inserted")
    }
    //finally, delete the entry in the duplicate table (if exists)
    template = "delete from duplicates WHERE pendingid = $1";
    results = await pool.query(template,[id]);
    //Now delete the pending entry
    template = "delete from pending WHERE id = $1";
    results = await pool.query(template,[id]);
    res.json({ msg: "approved" });
    } catch (err){
      console.log(err);
    }
}); 


/*
Reject form
accepts a pending alumni ID of a form
removes it from the pending alumni tables
ACCEPTS 
  pending alumni ID 
RETURNS
  success or failure message
*/
app.post('/reject', async (req, res) => {
  let id = parseInt(req.body.id);
  try {
    //first, delete the entry in the duplicate table (if exists)
    let template = "delete from duplicates WHERE pendingid = $1";
    let results = await pool.query(template,[id]);
    template = "delete from pending WHERE id = $1";
    results = await pool.query(template,[id]);
    res.json({ msg: "rejected" });
    } catch (err){
      console.log(err);
    }

}); 

/*delete alumnus
accepts an alumni ID number
removes that alumni from alumni tables
ACCEPTS 
  alumni ID
RETURNS
  success or failure message
*/
app.post('/delete', async (req, res) => {
  let id = parseInt(req.body.id);
  try {
    let template = "delete from alumni WHERE id = $1";
    const dbresponse = await pool.query(template,[id]);
    const results = dbresponse.rows.map((row) => {return row});
    res.json({ msg: "deleted" });
    } catch (err){
      console.log(err);
    }
}); 

/*edit alumnus
accepts an alumni ID number
edits their information in the alumni tables, if changed
ACCEPTS (for each of these, can pass in existing, or changed values)
  int alumni ID
  string firstName 
  string middleName,
  string lastName,
  string occupation
  string email
  string emailUpdates (whether they want to receieve updates) (backend parses into bool)
  string personalUpdates
  string gradYear (backend parses)
  string major
RETURNS
  success or failure message
*/
app.post("/edit", async (req, res) => {
  //console.log(req.body)
  const id = parseInt(req.body.id);
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const occupation = req.body.occupation;
  const email = req.body.email;
  const emailUpdates = req.body.emailUpdates; //todo check this
  const personalUpdates = req.body.personalUpdates;
  const gradYear = parseInt(req.body.gradYear);
  const major = req.body.major;
  let query,result
  try {
    //update
    query = "UPDATE alumni SET firstName = $1, middleName = $2, lastName = $3, gradYear = $4, major = $5, occupation = $6, email = $7, emailUpdates = $8, personalUpdates = $9 WHERE id = $10";
    result = await pool.query(query, [firstName, middleName, lastName, gradYear, major, occupation, email, emailUpdates, personalUpdates,id]);
    console.log(result);
    res.json({ msg: "edited" });
  }
  catch (err) {
    console.log("ERROR " + err);
  }
});

/* feature alumnus
accepts an alumni ID number
removes current featured alumni from featured table
adds this alumni ID to featured table
ACCEPTS 
  int alumniID
RETURNS
  success or failure message
*/
/* TEST FUNCTION (not used in application)
deletes all pending forms
*/
app.post('/feature', async (req, res) => {
  let id = parseInt(req.body.id);
  try {
    let template = "INSERT INTO featured (id) VALUES ($1)";
    let result = await pool.query(template,[id]);
    res.json({ msg: "featured" });
    } catch (err){
      console.log(err);
    }
}); 
  

/* show featured
accepts no arguments
returns the current featured alumni (if none featured, returns first one)
ACCEPTS 
  nothing
RETURNS
  alumnus information
*/
app.get('/showFeatured', async (req, res) => {
  try {
    let template = `select id from featured`;
    let results = await pool.query(template);
    let id = parseInt(results.rows[0].id)
    template = `select * from alumni WHERE id = $1`;
    results = await pool.query(template,[id]);
    results = results.rows.map((row) => {return row});
      res.json(
        results
      )
    console.log(results);
  } catch (err){
  console.log(err);
  }
}); 


var pool = new Pool(config);

app.get("/hello", (req, res) => {
  res.json("Hello World!");
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at http://localhost:${app.get("port")}/`);
});


