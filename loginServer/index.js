const hidden = require("./private.json")
const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt")

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config({ path: "./.env"})

const database = mysql.createConnection({
    host: hidden.host,
    user: hidden.user,
    password: hidden.password,
    database: hidden.database
});


//collect user data and store in database
app.post('/register', (req, res) => {
    const name = req.body.firstName;
    const user = req.body.user;
    const pass = bcrypt.hashSync(req.body.pass, 10);

    database.query("SELECT * FROM USERS where username = ?",
    [user], function (err, result) {
          if (err) throw err;
          if(result.length > 0) {
            res.send({errMessage: "Username already exists"})
          }
          else {
            database.query("INSERT INTO USERS (name, username, password) VALUES (?,?,?)",
                [name, user, pass], function (err, result) {
                if (err) throw err;
                else {
                  console.log("1 record inserted");
                  res.send({Message: "Registered! Please continue to login page."})
                }
            });
          }
    });
});

app.post('/login', (req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;

    database.query("SELECT * FROM USERS where username = ?",
      user, function (err, result) {
        if (err) throw err;
        if(result.length > 0) {
          bcrypt.compare(pass, result[0].password, (error, response) => {
            if(response) {
              res.send(result);
            }
            else {
              res.send({errMessage: "Wrong password or username"})
            }
          })
        }
        else {
          res.send({errMessage: "User does not exsist"})
        }
    });
});

app.listen(3001, () => {
    console.log("running");
});
