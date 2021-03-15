const mongoose = require('mongoose');




const dbURI = "";

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true } )
    .then((res)=>{
        console.log("connected to DB");
    })
    .catch((err)=>{
        console.log(err)
    });

