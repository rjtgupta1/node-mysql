const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Root@000',
    database:'test'
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