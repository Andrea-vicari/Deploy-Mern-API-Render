const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
require ('dotenv').config({path: "./.env"});

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => console.log(`Connected to DB and Listening on port ${process.env.PORT}`));
    })
    .catch((error)=>{
        console.log(error)
    })

const tracksRoutes = require('./routes/tracks');


const app = express();
app.use(express.json());
app.use(tracksRoutes)


app.use(express.json())





app.use('/api/tracks', tracksRoutes)

