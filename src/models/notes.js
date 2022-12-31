const mongoose = require('mongoose')
require('dotenv').config()
const noteSchema= new mongoose.Schema({
    id: {
        type : String,
        unique : true,
        required : true
    },
    userid: {
        type : String,
        required : true
    },
    title :{
        type : String,
        required : true
    },
    content : {
        type : String,
    },
    dateAdded : {
        type : Date,
        default : Date.now

    }
})
const Note = mongoose.model('Note', noteSchema)

module.exports =Note