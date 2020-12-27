const express=require('express');
const apiRouter=express.Router();

const db=require('../models');

apiRouter.get('/view',(req,res)=>{
 db.Student.findAll().then(allStudent=>res.send(allStudent));
});


module.exports=apiRouter;