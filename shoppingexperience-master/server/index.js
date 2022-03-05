
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
   
    user: 'admin',
    host: 'aws-sql.crrtsanmfwdi.us-east-1.rds.amazonaws.com',
    password:'master-AWS-guy',
    database: "employeesystem",

});


app.post('/create',(req,res)=> {
    console.log(req.body);
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const phone = req.body.phone
    const password = req.body.password


    db.query("INSERT INTO useraccounts (firstName, lastName, email, phone,password) VALUES (?,?,?,?,?)",
    [firstName,lastName,email,phone,password],
    (err, result)=> {
        if (err) {
            console.log(err);
        }
        else{
            res.send("Values Inserted")
        }
    });

});

app.post('/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM useraccounts WHERE email = ? AND password = ?",
        [email,password],
        (err, result) => {
            if (err){
               // console.log("FIRST IF");
                res.send({ err:err });
            }

            if (result.length > 0) {
             //   console.log("SECOND IF");
                res.send(result);

            }
            else {
              //  console.log("THIRD IF");
                res.send({ message: "Wrong username/password combination!"});
            }
        }
    )

    }
);


app.listen(3001, () => {

    console.log("Yey, your server is running on port 3001");

});