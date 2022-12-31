const express = require ('express')
require('./db/mongoose')
const noteRouter = require('./routers/notes')
const Note = require('./models/notes')
const app =express()
const port = process.env.PORT||3000
app.use(express.json())
app.use(noteRouter)

app.listen(port,()=>{
    console.log('Server is up on port ' + port)
})