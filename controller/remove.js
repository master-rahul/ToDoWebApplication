const db = require('../config/mongoose');                                            // Fetching Mongoose configuration file
const taskInfoList = require('../models/todoList');                                  // Fetching Mongoose instance for the database

module.exports.remove = function (request, response) {
    taskInfoList.findByIdAndDelete(request.body.id, function (error) {
        if (error) {
            console.log('Error in Deleting an object form Database');
            return;
        } else {
            console.log('Removed from Database');
            return response.redirect('back');
        }
    });
}
