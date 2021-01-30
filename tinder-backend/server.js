import express from 'express'
import mongoose from 'mongoose'

//AppConfig
const app = express();
const port = process.env.PORT || 8001

//Middleware

//DB Config

//API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello World"));

//Listeners
app.listen(port, () => console.log(`listening on localhost: ${port}`))