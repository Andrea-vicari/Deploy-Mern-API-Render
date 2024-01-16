const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
require ('dotenv').config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_DB_CONNECT_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => console.log(`Connected to DB and Listening on port ${process.env.PORT}`));
    })
    .catch((error)=>{
        console.log(error)
    })

const tracksRoutes = require('./routes/tracks');

app.use(tracksRoutes)

app.use('/api/tracks', tracksRoutes)

