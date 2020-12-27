const express=require('express');
const apiRouter=express.Router();

const db=require('../models');

apiRouter.get('/view',(req,res)=>{
 db.User.findAll({
    
 }).then(allUser=>res.send(allUser));
});


module.exports=apiRouter;