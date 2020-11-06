const express = require('express');
const apiRouter=express.Router();
const db=require('../models')



// get all todos
apiRouter.get("/get/all", (req, res) => {
    db.Todo.findAll().then(todos => res.send(todos));
  });
//   get single data
 apiRouter.get('/find/:id',(req,res)=>{
     db.Todo.findAll({
         where:{
             id:req.params.id
         }
     }).then(data=>res.send(data));
 })
  // get all todos
apiRouter.post("/post/new", (req, res) => {
    db.Todo.create({
        text : req.body.text
    }).then(submiteTodos => res.send(submiteTodos));
  });


//   delete data
apiRouter.delete('/delete/:id',(req,res)=>{
    db.Todo.destroy({
        where:{
            id:req.params.id
        }
    }).then(num=>{
        if(num==1){
            res.send("data was delete successfully");
        }else{
            res.send({
                message: `Cannot delete data with id=${id}. Maybe data was not found!`
            })
        }
    }).catch(e=>{
        res.status(5000).send({
            message: "Could not delete data with id=" + id
        })
    });
});
// edit
// edit a todo
apiRouter.put("/edit", (req, res) => {
    db.Todo.update(
      {
        text: req.body.text
      },
      {
        where: { id: req.body.id }
      }
    ).then(() => res.send("success"));
  });
module.exports=apiRouter;