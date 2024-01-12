const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
require ('dotenv').config();

const tracksRoutes = require('./routes/tracks');


const app = express();
app.use(express.json());
app.use(tracksRoutes)


mongoose.connect("mongodb+srv://dede:mXYfQt1xNhJmrwKX@mern-deploy-render.ugrdoha.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        app.listen(4000);
    })
    .catch((error)=>{
        console.log(error)
    })


app.use('/api/tracks', tracksRoutes)

