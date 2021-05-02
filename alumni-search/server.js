require("isomorphic-fetch");

require("dotenv").config();
const argon2 = require("argon2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { json } = require("express");

//default admin credentials
const DEFAULT_USR = 'admin';
const DEFAULT_PASS = 'pass';

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

/* This post request is for the alumni submission form
it takes the information entered by the alumni and adds it to the 
pending approval table, this function does not need to do anything else
delete the fluff, we will handle duplicate entries in another get request when moving a 
pending alumni to the alumni table, we don't care about duplicates here
*/
//the variable case has to remain consistent with what is in the tables
app.post("/submit", async (req, res) => {
  console.log(req.body)
  const firstname = req.body.firstname;
  const middlename = req.body.middlename;
  const lastname = req.body.lastname;
  const occupation = req.body.occupation;
  const email = req.body.email;
  const emailupdates = req.body.emailupdates; //todo check this
  const personalupdates = req.body.personalupdates;
  const gradyear = req.body.gradyear;
  const major = req.body.major;
  let query,result,originalId,pendingId; //vars
  try {
    console.log(gradyear)
    //we dont need any check here, this function should just submit a form to the pending table
    // //check if email already exists in pending
    // //delete it
    // query = "DELETE FROM pending where email = $1"//need to actually check if an email exists, this does not do that. 
    // result = await pool.query(query, [email]);

    //insert pending form
    query = "insert into pending (firstname, middlename, lastname, gradyear, major, occupation, email, emailupdates, personalupdates) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
    result = await pool.query(query, [firstname, middlename, lastname, gradyear, major, occupation, email, emailupdates, personalupdates]);
    console.log(result);

    //********WE DON'T NEED THIS HERE ***********/
    //now check if the form just added matches one in the alumni DB
    // query = "SELECT id FROM alumni where (firstName = $1 AND middleName = $2 AND lastName = $3) OR email = $4";
    // result = await pool.query(query, [firstName,middleName,lastName,email]);
    // console.log("checked if form matched")
    // //if alumni with matching name exists in database
    // if (result.rowCount > 0) { 
    //   originalId = result.rows[0].id;
    //   //get the ID of the pending form just submitted
    //   query = "SELECT id FROM pending where email = $1";
    //   result = await pool.query(query, [email]);
    //   pendingId = result.rows[0].id;
    //   //mark as duplicate
    //   query = "INSERT into duplicates (pendingId,alumniId) VALUES ($1,$2)";
    //   result = await pool.query(query,[pendingId,originalId])
    //   res.json({ msg: "created as duplicate" });
    // } else {
    res.json({ msg: "created" });
    // }
  }
  catch (err) {
    console.log("ERROR " + err);
  }
});

/*
Admin Login
Admin enters their username/password combination. We then check the admin table to verify the credentials.
*/
app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    //first check if admin account exists
    let query = "SELECT username FROM admin";
    let result = await pool.query(query);
    //if no admin account created
    if (result.rowCount < 1) {
      //has default password
      hash = await argon2.hash(DEFAULT_PASS);
      //inset default admin account into db
      query = "INSERT INTO admin (username, password) VALUES ($1, $2)";
      result = await pool.query(query, [DEFAULT_USR, hash]);
    }
    //now move on to regular login
    query = "SELECT username,password FROM admin WHERE username = $1";
    result = await pool.query(query, [username]);
    console.log(result);
    if (result.rowCount == 1) {
      console.log(result.rows[0].password);
      if(await argon2.verify(result.rows[0].password, password)){
        res.json({ status: "success", username: result.rows[0].username });
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
This allows the admin to create an admin account or multiple accounts by entering username/password combination. 
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



/* 
returns all pending
*/
app.get('/getPending', async (req, res) => {
  try {
    let template = "Select * from pending";
    const dbresponse = await pool.query(template);
    const results = dbresponse.rows.map((row) => {return row});
      res.json(
        results)
    console.log(results);
  } catch (err){
  console.log(err);
  }
}); 

/* EMAIL UPDATES is string NOT boolean
Email List
RETURNS
  List of Alumni first, last names, and emails
*/ 
app.get('/getEmailList', async (req, res) => {
  console.log("email list")
  try {
    let template = "Select firstName, lastName, email from alumni WHERE emailUpdates = $1";
    const dbresponse = await pool.query(template,['y']);
    const results = dbresponse.rows.map((row) => {return row});
      res.json(
        results)
    console.log(results);
  } catch (err){
  console.log(err);
  }
}); 

/* Major list
RETURNS
  List of unique majors in alumni database
*/ 
app.get('/listMajors', async (req, res) => {
  try {
    let template = "Select distinct major from alumni";
    const dbresponse = await pool.query(template);
    const results = dbresponse.rows.map((row) => {return row});
      res.json(
        results)
    console.log(results);
  } catch (err){
  console.log(err);
  }
}); 

/* Occupation list
RETURNS
  List of unique occupations in alumni database
*/ 
app.get('/listOccupations', async (req, res) => {
  try {
    let template = "Select distinct occupation from alumni";
    const dbresponse = await pool.query(template);
    const results = dbresponse.rows.map((row) => {return row});
      res.json(
        results)
    console.log(results);
  } catch (err){
  console.log(err);
  }
}); 

/* Year list
RETURNS
  List of unique years in alumni database
*/ 
app.get('/listYears', async (req, res) => {
  try {
    let template = "Select distinct gradYear from alumni";
    const dbresponse = await pool.query(template);
    const results = dbresponse.rows.map((row) => {return row});
      res.json(
        results)
    console.log(results);
  } catch (err){
  console.log(err);
  }
}); 

/*
*/



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
This searchs alumni table by keyword and returns any matching entries.
*/
//THIS IS DONE, DO NOT MESS WITH IT
app.get('/search', async (req, res) => {
  let searchTerm = req.query; //the searchterm entered by the user
  let username = req.query; //the username of the user, this is used with jscookie
  let template;


  console.log(`Search for ${searchTerm.searchTerm}, ${username.username}`);

  try {
    if (Number.isInteger(parseInt(searchTerm.searchTerm))) {
      template = "select * from alumni where gradyear = '"+searchTerm.searchTerm+"'";
    } else {
      template = "select * from alumni where firstName ilike '"+searchTerm.searchTerm+"' OR middleName ilike '"+searchTerm.searchTerm+"' OR lastName ilike '"+searchTerm.searchTerm+"' OR occupation ilike '"+searchTerm.searchTerm+"' OR major ilike '"+searchTerm.searchTerm+"'";
    }
    console.log(searchTerm.searchTerm);
    const dbresponse = await pool.query(template);
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
get matching name
*/
app.get('/findMatch', async (req, res) => {
  let firstName = req.query.firstName; //the searchterm entered by the user
  let lastName = req.query.lastName; //the username of the user, this is used with jscookie
  let template, response;
  try {
    template = "select * from alumni where firstname = $1 AND lastname = $2";
    response = await pool.query(template, [firstName,lastName]);
    let results = response.rows.map((row) => {return row});
      res.json(
        results
      )
  } catch (err){
  console.log(err);
  }
}); 


/*
Search database with more advanced filters
*/
app.get('/advancedSearch', async (req, res) => {
  let year = req.query.year; 
  let occupation = req.query.occupation; 
  let major = req.query.major; 

  let template = "SELECT * FROM alumni"; //starter template
  let filterCount = 0; //if there has already been a where clause
  let filters = []; //array of variables to pass in to query
  let filterVars = ["$1","$2","$3"]; 
  try {
    //year defaults to 0 if no year filter is used
    if (year > 0) {
      //concatanate this part of the search
      template = template + " WHERE gradYear = " + filterVars[filterCount];
      filters[filterCount] = year; //the first array element now contains year
      filterCount++; //mark that $1 has now been used
    }
    //occupation and major default to - if no filter
    if (occupation !== "-") {
      if (filterCount == 0) { //if no year filter
        template = template + " WHERE "; //add where
      } else {
        template = template + " AND " //gonna add another clause
      }
      //this part executed regardless
      template = template + "occupation = " + filterVars[filterCount];
      filters[filterCount] = occupation;
      filterCount++;
    }
    if (major !== "-") {
      if (filterCount == 0) { //if no filter
        template = template + " WHERE "; //add where
      } else {
        template = template + " AND " //add another clause
      }
      //this part executed regardless
      template = template + "major = " + filterVars[filterCount];
      filters[filterCount] = major;
      filterCount++;
    }
    console.log(template);
    const dbresponse = await pool.query(template,filters);
    const results = dbresponse.rows.map((row) => {return row});
      res.json(
        results
      )
  } catch (err){
  console.log(err);
  }
}); 


/*VERIFY THIS WORKS
Approve form
sends the form to the alumni DB
removes it from the pending alumni tables
ACCEPTS 
  pending alumni ID 
RETURNS
  success or failure message
*/
app.post('/approve', async (req, res) => {
  console.log(req.body.id)
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


/*DONT KNOW IF THIS WORKS BUT IT NEEDS TO BE RE-WORKED ANYWAY, WE SHOULD NOT HAVE A DUPLICATE TABLE, NO NEED FOR IT. IF A SUBMISSION IS REJECTED IT WILL BE REMOVED
FROM THE PENDING TABLE. 
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
  let id = parseInt(req.body.id)
  try {
    //remove it from being edited
    let template = "DELETE FROM editing";
    let result = await pool.query(template);
    template = "select id from featured"
    results = await pool.query(template);
    //if alumni to delete is featured
    if (results.rows[0].id == id) {
      //remove them from featured
      template = "DELETE FROM featured"
      results = await pool.query(template);
    }
    template = "delete from alumni WHERE id = $1";
    const dbresponse = await pool.query(template,[id]);
    results = dbresponse.rows.map((row) => {return row});
    res.json({ msg: "deleted" });
    } catch (err){
      console.log(err);
    }
}); 

/*CHECK IF THIS WORKS
edit alumnus
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
  const firstName = req.body.firstname;
  const middleName = req.body.middlename;
  const lastName = req.body.lastname;
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

/* 
feature alumnus
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
  console.log("Id = " + req.body.id)
  let id = parseInt(req.body.id);
  try {
    let template = "DELETE FROM featured";
    let result = await pool.query(template);
    template = "INSERT INTO featured (id) VALUES ($1)";
    result = await pool.query(template,[id]);
    res.json({ msg: "featured" });
    } catch (err){
      console.log(err);
    }
}); 

/* 
show alumni
accepts no arguments
returns the current featured alumni 
ACCEPTS 
  nothing
RETURNS
  alumnus information
*/
app.get('/showAlumni', async (req, res) => {
  try {
    let template = `select * from alumni`;
    let results = await pool.query(template);
    results = results.rows.map((row) => {return row});
      res.json(
        results
      )
    console.log(results);
  } catch (err){
  console.log(err);
  }
}); 

  

/* 
show featured
accepts no arguments
returns the current featured alumni 
ACCEPTS 
  nothing
RETURNS
  alumnus information
*/
app.get('/showFeatured', async (req, res) => {
  try {
    let template = `select id from featured`;
    let results = await pool.query(template);
    if (results.rowCount == 0) {
      //if no featured alumni, feature first by default
      template = `select * from alumni LIMIT 1`;
      results = await pool.query(template);
    } else { //if there is a featured alumni
      let id = parseInt(results.rows[0].id)
      template = `select * from alumni WHERE id = $1`;
      results = await pool.query(template,[id]);
    }
    
    results = results.rows.map((row) => {return row});
      res.json(
        results
      )
    console.log(results);
  } catch (err){
  console.log(err);
  }
}); 

/* 
show saved state
This is used by the edit page to remember which alumni is being edited between pages
*/
app.get('/showSaved', async (req, res) => {
  try {
    //first get the id
    let template = `select id from editing`;
    let results = await pool.query(template);
    //then fine the alumni information
    let id = parseInt(results.rows[0].id)
    template = `select * from alumni WHERE id = $1`;
    results = await pool.query(template,[id]);
    //return it
    results = results.rows.map((row) => {return row});
      res.json(results)
  } catch (err){
  console.log(err);
  }
}); 

/* 
This function takes an id, and saves that id between page loads
this will be used excluviely by the editing page
*/
app.post('/save', async (req, res) => {
  console.log("Id = " + req.body.id)
  let id = parseInt(req.body.id);
  try {
    let template = "DELETE FROM editing";
    let result = await pool.query(template);
    template = "INSERT INTO editing (id) VALUES ($1)";
    result = await pool.query(template,[id]);
    res.json({ msg: "saved" });
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


