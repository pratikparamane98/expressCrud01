// import express from 'express';
const express = require('express');
// import bodyParser from 'body-parser';
const bodyParser = require('body-parser');
// import usersRoutes from './routes/users.js'
const usersRoutes = require('./routes/users.js')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/users',usersRoutes);

app.get('/',(req,res)=>{
    console.log("Test");
    res.send("every is connected");
})

app.listen(PORT,() =>{
    // console.log(`server running on port:http://localhost//${PORT}`)
    console.log(+PORT);
})