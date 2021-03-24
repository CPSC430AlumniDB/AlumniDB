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

app.post("/submit", async (req, res) => {
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const occupation = req.body.occupation;
  const email = req.body.email;
  const emailUpdates = req.body.emailUpdates;
  const personalUpdates = req.body.personalUpdates;
  const year = parseInt(req.body.gradyear);
  const major = req.body.major;
  let pendingId, yearId,majorId;
  try {
    const query = "insert into pending (firstName, middleName, lastName, occupation, email, emailUpdates, personalUpdates) values ($1, $2, $3, $4, $5, $6, $7)";
    const result = await pool.query(query, [firstName, middleName, lastName, occupation, email, emailUpdates, personalUpdates]);
    console.log(result);
    const queryId = "select id from pending where email = $1";
    const resultID = await pool.query(queryId, [email]);
    console.log(resultID);
    pendingId = resultID.rows[0].id;

    //check if major exists
    //if not, add it
    let majorQuery = "select major from majors WHERE major = $1";
    let majorResult = await pool.query(majorQuery,[major])
    if (majorResult.rowCount == 0) {
      majorQuery = `INSERT into majors (major) values ($1)`;
      await pool.query(majorQuery,[major]);
    }

    //get the major id
    majorQuery = "SELECT id FROM majors WHERE major = $1";
    majorResult = await pool.query(majorQuery,[major]);
    majorId = majorResult.rows[0].id;

    //make connection with pending alumni and major
    majorQuery = "INSERT INTO pending_major (pendingId,majorId) VALUES ($1,$2)";
    majorResult = await pool.query(majorQuery,[pendingId,majorId]);

    //check if year exists, if not, add it
    let yearQuery = "select year from year WHERE year = $1";
    let yearResult = await pool.query(yearQuery,[year]);
    if (yearResult.rowCount == 0) {
      yearQuery = `INSERT into year (year) values ($1)`;
      await pool.query(yearQuery,[year]);
    }

    //get the year id
    yearQuery = "SELECT id FROM year WHERE year = $1";
    yearResult = await pool.query(yearQuery,[year]);
    yearId = yearResult.rows[0].id;

    //make connection with pending alumni and year
    yearQuery = "INSERT INTO pending_year (pendingId,yearId) VALUES ($1,$2)";
    yearResult = await pool.query(yearQuery,[pendingId,yearId]);

  }
  catch (err) {
    console.log("ERROR " + err);
  }
});


app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const query =
      "SELECT username,password FROM admin WHERE username = $1";
    const result = await pool.query(query, [username]);
    console.log(result);
    if (result.rowCount == 1) {
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

app.get('/getUsers', async (req, res) => {
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

app.post('/deletePending', async (req, res) => {
  
  try {
    let template = "delete * from pending";
    const dbresponse = await pool.query(template,[]);
    const results = dbresponse.rows.map((row) => {return row});
      res.json(
        results
      );
}); 
  
app.get('/search', async (req, res) => {
  let searchTerm = req.query;
//5 queries to return all the results from all the searches, return row wherever a match 
//need to store in an array of objects
  console.log(`Search for ${searchTerm.searchTerm}`);
//get logged in user zip if there is one

  try {
    let template;
    if (Number.isInteger(parseInt(searchTerm.searchTerm))) {
      template = `select alumni.id,firstName,middleName,lastName,occupation,email,year,major from alumni
      inner join alumni_year on alumni_year.alumniId = alumni.id
      inner join year on alumni_year.yearId = year.id
      inner join alumni_major on alumni_major.alumniId = alumni.id
      inner join majors on majors.id = alumni_major.majorId
      where year.year = $1`;
      
      
    } else {
      template = `select alumni.id,firstName,middleName,lastName,occupation,email,year,major from alumni
      inner join alumni_year on alumni_year.alumniId = alumni.id
      inner join year on alumni_year.yearId = year.id
      inner join alumni_major on alumni_major.alumniId = alumni.id
      inner join majors on majors.id = alumni_major.majorId
      where alumni.firstName ilike $1 
      or middleName ilike $1 
      or lastName ilike $1 
      or occupation ilike $1
      or major ilike $1`;
    }
    console.log(searchTerm);
    const dbresponse = await pool.query(template,[searchTerm.searchTerm]);
    const results = dbresponse.rows.map((row) => {return row});
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


