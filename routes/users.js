const express = require('express');
const uuidv4 = require('uuid').v4
// import express from 'express';
// import {v4 as uuidv4} from 'uuid';
// import users from '../controllers/users.js'
// const {createUser,findUser,deleteUser,updateUser,findAllUsers} = require('../controllers/users.js');
// const {createUser,findUser,deleteUser,updateUser,findAllUsers} = require('../controllers/users.js')


const router = express.Router();




router.get('/',(req,res)=>{
    console.log(users);
    res.send(users);

});

//it will send the data from the frontend to the server like values inputted in the forms such as age,name,address.... 

/*create function */

router.post('/',(req,res)=>{
    const user = req.body;
    users.push({...user,id:uuidv4()});
    res.send("User with name:"+user.name+" added to the database");
});

//anything the user types after the /users/.. will open following response and we can access that value using req.params
//so we are using this to find the user in database as per client request

/**Read function */

router.get('/:id',(req,res) =>{
    const {id} = req.params;
    const foundUser = users.find((user)=> user.id==id);
    res.send(foundUser);
});

/**Delete function */

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    users = users.filter((user)=> user.id!=id);
    res.send("user was deleted");
})

/**Update function */

router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const {name,lastNAme,age} = req.body;
    const userToBeUpdated =  users.find((user)=> user.id==id);

    if(name){
        userToBeUpdated.name = name;
    }

    if(lastNAme){
        userToBeUpdated.lastNAme = lastNAme;
    }

    if(age){
        userToBeUpdated.age = age;
    }
    res.send("user has been updated");

});

module.exports=router;