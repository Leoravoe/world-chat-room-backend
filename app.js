// imports
const express = require('express');
const cors = require('cors');


// app config

const app = express();

// middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// port config
PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`App listening to port ${PORT}`);
});


// routes
app.get('/',(req, res)=>{
    res.send("Hello I am on !!")
})

