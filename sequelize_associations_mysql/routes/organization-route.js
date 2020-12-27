const express=require('express');
const apiRouter=express.Router();

const db=require('../models');

apiRouter.get('/view',(req,res)=>{
 db.Organization.findAll({
   //  include:[db.User]
 }).then(allOrganization=>res.send(allOrganization));
});


module.exports=apiRouter;