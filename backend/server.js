const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
require ('dotenv').config();
const app = express();

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

app.use(express.json());

// !!! Important to avoid CORS block (!! Check the final slash / )
/* USE THIS FOR DEPLOYMENT: https://deploy-mern-api-render-frontend.vercel.app/ */
app.use(cors(
    {
        origin: ["http://localhost:5173"],
        methods: ["POST", "GET", "PUT", "PATCH"],
        credentials: true
    }
));

app.use(cookieParser())

mongoose.connect(process.env.MONGO_DB_CONNECT_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => console.log(`Connected to DB and Listening on port ${process.env.PORT}`));
    })
    .catch((error)=>{
        console.log(error)
    })

    const varifyUser = (req, res, next) => {
        const token = req.cookies.token;
        if(!token) {
            return res.json("Token is missing")
        } else {
            jwt.verify(token, "jwt-secret-key", (err, decoded) => {
                if(err) {
                    return res.json("Error with token")
                } else {
                    if(decoded.role === "admin") {
                        next()
                    } else {
                        return res.json("not admin")
                    }
                }
            })
        }
    }

    app.get('/dashboard',varifyUser ,(req, res) => {
        res.json("Success")
    })

    app.post('/register', (req, res) => {
        const {name, email, password} = req.body;
        bcrypt.hash(password, 10)
        .then(hash => {
            UserModel.create({name, email, password: hash})
            .then(user => res.json("Success"))
            .catch(err => res.json(err))
        }).catch(err => res.json(err))
    })

    app.post('/login', (req, res) => {
        const {email, password} = req.body;
        UserModel.findOne({email: email})
        .then(user => {
            if(user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if(response) {
                      const token = jwt.sign({email: user.email, role: user.role},
                            "jwt-secret-key", {expiresIn: '1d'})
                        res.cookie('token', token)
                        return res.json({Status: "Success", role: user.role})
                    }else {
                        return res.json("The password is incorrect")
                    }
                })
            } else {
                return res.json("No record existed")
            }
        })
    })


const tracksRoutes = require('./routes/tracks');
const keysRoutes = require('./routes/keys');



app.use(tracksRoutes)
app.use(keysRoutes)


app.use('/api/tracks', tracksRoutes)
app.use('/api/keys', keysRoutes)


