const express = require('express')
const Note = require('../models/notes')
const router = new express.Router()


router.get("/", function(req,res){
    res.send(" This is the HOME PAGE");
});

router.get("/notes", async function(req,res){
    var notes = await Note.find();
    res.send(notes);
});

router.post("/notes/add", async function(req,res){
    await Note.deleteOne({id : req.body.id});
    
    var Newnote = new Note(req.body)
    res.send(req.body)
    Newnote.save()
} )

router.post("/notes/delete", async function(req,res){
    await Note.deleteOne({id:req.body.id});
    res.send("note with id " + req.body.id + " has been deleted")
} )


module.exports = router