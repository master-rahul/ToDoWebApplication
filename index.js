//Author
//@Rahul Verma 
const express = require('express');                     // Fetching express modules
const port = 8000;                                      // Setting a port for the express server to run
const app = express();                                  // Running Express Server
const bodyParser = require('body-parser');              // Using a body-parser in middleware to read form data
const mongoose = require('mongoose');                   // Getting mongoose modules
mongoose.connect('mongodb://localhost/toDoWebAppDb');   // Fetching instance of the mongoose after instance being direceted to mongodb

app.set('view engine', 'ejs');                          // Setting up teplate Engine
app.set('views','./views');                             // Setting up view engine file path

app.use(express.static('static'));                      // Middleware to access staic files
app.use('/',require('./routes/home'));                  // Redirecting


app.listen(port, function(error){                       // Listening Port 8000 for any incoming requests
    if(error) console.log(`Error in listening to port : ${port} due to -> ${error}`);
    else console.log(`Congrats Express Server listening to port : ${port}`);
});