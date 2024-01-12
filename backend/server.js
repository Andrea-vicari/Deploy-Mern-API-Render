const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
require ('dotenv').config();

const tracksRoutes = require('./routes/tracks');


const app = express();
app.use(express.json());
app.use(tracksRoutes)


mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => console.log(`Connected to DB and Listening on port ${process.env.PORT}`));
    })
    .catch((error)=>{
        console.log(error)
    })


app.use('/api/tracks', tracksRoutes)

