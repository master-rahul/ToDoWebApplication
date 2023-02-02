const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/toDoWebAppDb');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error Connecting to Db :'));
db.once('open', function(){console.log('Connected to DataBase successfully')});