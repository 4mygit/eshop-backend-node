const express = require('express');
const cors = require('cors')

const router = require('./router/router')

const app = express();


app.use(express.json());
app.use(cors());


app.use(router)

app.get('/', (req,res)=>{

    res.send("This is the home page");
})

app.listen(4000,()=>{
    console.log("Server running on port no 4000")
})