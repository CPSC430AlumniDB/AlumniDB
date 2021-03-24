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

/*
Admin Login
Checks admin credentials
Accepts a username and password
Returns a sucess or failure message
*/
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

/*
Create account
creates an admin account
takes a username and password
returns sucess or failure message
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
Search database
searches database for alumni of specific criteria
accepts searchterm
returns list of alumni
*/
app.get('/search', async (req, res) => {
  
  let searchTerm = req.query;

  console.log(`Search for ${searchTerm.searchTerm}`);

  try {
    //TODO : advanced searchterm parsing
    const template = "select * from alumni where firstname like '"+searchTerm.searchTerm+"' or middlename like '"+searchTerm.searchTerm+"' or lastname like '"+searchTerm.searchTerm+"' or occupation like '"+searchTerm.searchTerm+"' or email like '"+searchTerm.searchTerm+"'";
    console.log(searchTerm);
    const dbresponse = await pool.query(template);
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

/* HAS NOT BEEN TESTED
Get list of pending alumni
 */
app.get('/pendingList', async (req, res) => {
  
  try {
    const template = "select * from pending"; //query entire pending table
    const dbresponse = await pool.query(template);
    const results = dbresponse.rows.map((row) => {return row});
    if(results.length > 0){
      res.json(
        results
      )
    } else {
      res.json({status: "empty"})
    }
  } catch (err){
  console.log(err);
  }
}); 

//HAS NOT BEEN TESTED
/*Add form
Accepts alumni information
Adds them to the pending database
*/
app.post("/create", async (req, res) => {
  let hash;
  const firstName = req.body.firstName
  const middleName = req.body.middleName
  const lastName = req.body.lastName
  const gradYear = req.body.gradYear
  const degree = req.body.degree
  const occupation = req.body.occupation
  const email = req.body.email
  const updates = req.body.updates
  const receiveEmails = req.body.receiveEmails
  try {
    hash = await argon2.hash(password);
    console.log("HASH" + hash);
    const query =
      "INSERT INTO pending (firstname,middlename,lastname,occupation,email) VALUES ($1, $2, $3, $4, $5)";
    const result = await pool.query(query, [firstName,middleName,lastName,occupation,email]);
    //console.log(result);
    if (result.rowCount == 1) {
      console.log(username);
      res.json({ status: "success"});
    } else {
      res.json({ error: "failure" });
    }
  } catch (err) {
    console.log("ERROR " + err);
  }
});
    
/*TODO: implement
Approve form
accepts pending alumni ID of a form
sends the form to the alumni DB
removes it from the pending alumni tables
*/

/*
Reject form
accepts a pending alumni ID of a form
removes it from the pending alumni tables
*/

/*delete alumnus
accepts an alumni ID number
removes that alumni from alumni tables
*/

/*edit alumnus
accepts an alumni ID number
edits their information in the alumni tables, if changed
*/

/* feature alumnus
accepts an alumni ID number
removes current featured alumni from featured table
adds this alumni ID to featured table
*/

/* show featured
accepts no arguments
returns the current featured alumni (if none featured, returns first one)
*/


var pool = new Pool(config);

app.get("/hello", (req, res) => {
  res.json("Hello World!");
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at http://localhost:${app.get("port")}/`);
});


