const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const { HOST,username,PASSWORD,DB } = process.env;
const app = express();

const connection = mysql.createConnection({
    host:HOST,
    user:username,
    password:PASSWORD,
    database:DB
})

app.get('/',(req,res)=>{

    const sql = "select * from customers";

    connection.query(sql,(error,data)=>{
        if(error) 
            res.json(error.sqlMessage);
        else{
            res.json(data);
        }
    })
})


app.listen(4000,()=>{
    console.log('Working...');
})