# M.E.R.N DEPLOYED ON VERCEL
Installation of MERN application live on vercel, both Back and FrontEnd

## 💡 RECAP at 16/01 h.18:11 after GOOD deployment


[Server Side:](https://deploy-mern-api-render.vercel.app/)
[FrontEnd Side](https://deploy-mern-api-render-frontend.vercel.app/)

Response object in Frontend fetched from the Backend
{
    "data": [
        {
            "_id": "65a650a4d12852e524f5e1c6",
            "trackName": "Title 16 JAn 23",
            "trackUrl": "url track 16 jan h.10.40",
            "createdAt": "2024-01-16T09:47:16.510Z",
            "updatedAt": "2024-01-16T09:47:16.510Z",
            "__v": 0

        }
    ]
}

## 💡 RECAP at 16/01 before Run Build and Deploy (h.14:30)
**LOCALHOST**
* Fetch correctly the Datas from the MongoDB in the server
* Test The CRUD on localhost with POSTMAN: OK
* SERVER(Localhost:4000) => CLIENT(Localhost:5173) Works fine

## 🤔 TO DO
* 🧐 Check WELL the BUILD command with Create React App
* 😤 Try to deploy on Render and/or Vercel

===================
#### BackEnd folder
* Set up server.js
* Fixed (localhost) CORS error
* MONGO_DB_CONNECT_URI and PORT (4000)
* Ok the end points at /api/tracks
* Ok SCHEMAS and CONTROLLERS
* Connection with MongoDB OK

#### Front-end folder
* Installed React with Vite package
* Set up a makeAPICall() function to fetch from server




### Technologies
* Node.js
* Express
* Cors
* Mongoose
* MongoDB
* React
