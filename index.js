const express = require('express');
const port = 8000;
const app = express();
const bodyParser = require('body-parser');   
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/toDoWebAppDb');

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.static('static'));
app.use('/',require('./routes/home'));
app.use(bodyParser.urlencoded({extended : false}));    


app.listen(port, function(error){
    if(error) console.log(`Error in listening to port : ${port} due to -> ${error}`);
    else console.log(`Congrats Express Server listening to port : ${port}`);
});