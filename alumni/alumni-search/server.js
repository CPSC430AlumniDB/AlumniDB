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

    


var pool = new Pool(config);

app.get("/hello", (req, res) => {
  res.json("Hello World!");
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at http://localhost:${app.get("port")}/`);
});


