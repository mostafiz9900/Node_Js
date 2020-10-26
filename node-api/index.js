const express=require('express');
const app=express();

// Middelware
 
app.use(express.json());

// server creatino
// get -read data
// post - add data
// put/patch - updata data
// delete - delete data




let notes=[
    {
        id:1,
        title:'Note title 1',
        description:'Note Description 1'
    },
    {
        id:2,
        title:'Note title 1',
        description:'Note Description 1'
    }
]
app.get('/',(req,res)=>{
    // console.log(req.url);
    // const author={
    //     fname:'Mostafiz',
    //     lastname:"Rahman"
    // }; 
    res.send('home page');
});

// Get notes
app.get('/notes',(req,res)=>{

    if(notes.length==0){
        return res.send("No NOtes Found or NOt Yet create")
    }
    res.send(notes);
});
// get single note
app.get('/notes/:noteId',(req,res)=>{
    const noteId=parseInt(req.params.noteId);
   const note=notes.find(note=>note.id===noteId);

   if(note) return res.send(note);
   res.status(404).send('Note not found');
});

// adding node
app.post('/notes',(req,res)=>{    
    const note=req.body;
    notes=[...notes, note];
    res.send(notes);
 console.log('add notes');
});

// update note
app.put('/notes/:noteId',(req,res)=>{
    const noteId=parseInt(req.params.noteId);
    const noteInput=req.body;
    const gotNoteInput=Object.keys(noteInput);
    const allowedUpdate=['title','description'];
    try{
        const isallowed =gotNoteInput.every(update=>allowedUpdate.includes(update))
        const note= notes.find(note=>note.id===noteId);
       if(!isallowed){
       return res.status(400).send('Invalid operation')
       }
       if(note){
         notes=notes.map(note=>{
        if(note.id===noteId){
         return {
             ...note,
             ...noteInput
         };
        }else{
            return notes;
        }
    });
    return res.send(notes);
       }else{
      return res.status(404).send('Note Not Found');
       }
    }catch(error){
         res.status(500).send('Internal Server error');
    }
});


// delete note
app.delete('/notes/:noteId',(req,res)=>{
    const noteId=parseInt(req.params.noteId);
    const note= notes.find(note=>note.id===noteId);
if(note){
notes=notes.filter(note=>note.id!==noteId);
res.send(notes);
}else{
res.status(404).send('Note NOt found or Unable');
}
});



app.get('/hello/:name',(req,res)=>{
    const name=req.params.name;
    console.log(req.url);
    res.send(`Hello ${name}`);
});
app.get('*',(req,res)=>{
    res.status(404).send("404 Not Found");
})
app.listen(3000,()=>{
console.log('server is create and run port 3000');
});