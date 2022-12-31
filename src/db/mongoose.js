const mongoose = require('mongoose')
require('dotenv/config')
// require('dotenv').config()

const url = process.env.MONGODB_URL;
mongoose.set('strictQuery', true);
mongoose.connect(url , {
}).then(() => {
    console.log('connected to database');
}).catch((e) =>{
    console.log(e);
})