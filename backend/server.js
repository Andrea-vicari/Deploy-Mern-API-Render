const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require ('dotenv').config();
const app = express();

app.use(express.json());

app.use((req,res, next)=>{
    console.log(req.path, req.method)
    next()
})

// !!! Important to avoid CORS block (!! Check the final slash / )
/* USE THIS FOR DEPLOYMENT: https://deploy-mern-api-render-frontend.vercel.app/ */
app.use(cors(
    {
        origin: ["http://localhost:5173"],
        methods: ["POST", "GET", "PUT", "PATCH"],
        credentials: true
    }
));



mongoose.connect(process.env.MONGO_DB_CONNECT_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => console.log(`Connected to DB and Listening on port ${process.env.PORT}`));
    })
    .catch((error)=>{
        console.log(error)
    })



const tracksRoutes = require('./routes/tracks');
const keysRoutes = require('./routes/keys');
const usersRoutes = require('./routes/users');


app.use(tracksRoutes)
app.use(keysRoutes)
app.use(usersRoutes)

app.use('/api/tracks', tracksRoutes)
app.use('/api/keys', keysRoutes)
app.use('/api/users', usersRoutes)

