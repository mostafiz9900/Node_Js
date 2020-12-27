const express=require('express');
const apiRouter=express.Router();

const db=require('../models');

apiRouter.get('/view',(req,res)=>{
 db.Department.findAll({
    include:[db.User] 
 }).then(allDepartment=>res.send(allDepartment));
});


module.exports=apiRouter;