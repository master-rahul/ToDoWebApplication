const db = require('../config/mongoose');                                            // Fetching Mongoose configuration file
const taskInfoList = require('../models/todoList');

module.exports.add = function (request, response) {
   
    taskInfoList.create({
        description : request.body.description,
        priority : request.body.priority,
        cateogory : request.body.cateogory,
        startDateTime: request.body.startDateTime + ":00.000Z",
        endDateTime: request.body.endDateTime + ":00.000Z"
    }, function (error, newTask) {
        if (error) {
            console.log('Error in adding new task item',error);
            return;
        }
        else {
            console.log('Adding In Database', newTask);
            return response.redirect('back');
        }
        
    });
}
    