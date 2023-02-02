const { startSession } = require('mongoose');
const db = require('../config/mongoose');                                            // Fetching Mongoose configuration file
const UserLoginInfo = require('../models/todoList');

module.exports.load = function(request, response) {

    UserLoginInfo.find({}, function (error, tasks) {
        if (error) {
            console.log('Error in fetching tasks from Db');
            return;
        } else {
            return response.render('todo', { taskList: tasks });
        }
    });
}