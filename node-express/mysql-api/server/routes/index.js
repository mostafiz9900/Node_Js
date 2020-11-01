const express = require('express');
const db=require('../db');
const router=express.Router();


router.get('/api/get/studen/list', async (req,res,next)=>{
    try{
        let results=await db.all();
        res.json(results);
        // res.json({text:'text'});
    }catch(e){
        console.log9(e);
        res.sendStatus(500);
    }
   
});

router.post('/api/get/home',(req,res)=>{
 res.send("This is home page");
})
module.exports=router;