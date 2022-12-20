const express = require('express')

const app = express()
const randomWords = require('random-words');
const cors = require('cors');
const dbConnect = require('../../S4M2/shoppping-backend/Config/db.config');
const Users = require('./Model/user.model');
const PORT=process.env.PORT;
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => res.send('hello'))

app.get('/randomword',(req,res)=>{
    try{
        res.send(randomWords())
    }
    catch(e){
        res.send(e.message)
    }
})
app.get("/users",async(req,res)=>{
    let u=await Users.find({})
    res.send(u)
})
app.post("/users",async(req,res)=>{
    let u= req.body
    try {
        let newUser=await Users.create(u)
        res.send(newUser)
    }
    catch(e){
            res.status(500).send(e)
        }
})


app.listen(PORT, () => {
    dbConnect()
    console.log('server started on port 8080')})