const express = require("express");
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors());


const db = mysql.createConnection({
    host: "localhost",
    user: "system",
    password: "",
    database: "SignUp"
})
app.post('./SignUp',(req,res) =>{
    const sql ="INSERT INTO login(`name`,`email`,`password) value (?)";
    const value = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values],(err,data)=> {
        if(err){
            return res.json(data);
        }
        return res.json(data);
    })
})






app.listen(3306,()=> {
    console.log("listening");
})