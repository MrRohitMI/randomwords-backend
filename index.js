const express = require('express')

const app = express()
const randomWords = require('random-words');
const cors = require('cors');
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

app.listen(PORT, () => {console.log('server started on port 8080')})