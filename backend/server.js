const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
require ('dotenv').config();

const tracksRoutes = require('./routes/tracks');


const app = express();
app.use(express.json());
app.use(tracksRoutes)


mongoose.connect('mongodb+srv://dede:<password>@mern-deploy-render.ugrdoha.mongodb.net/?retryWrites=true&w=majority')



app.use('/api/tracks', tracksRoutes)

