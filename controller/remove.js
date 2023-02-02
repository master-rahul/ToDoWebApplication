const db = require('../config/mongoose');                                            // Fetching Mongoose configuration file
const taskInfoList = require('../models/todoList');

module.exports.remove = function (request, response) {
    taskInfoList.findByIdAndDelete(request.body.id, function (error) {
        if (error) {
            console.log('Error in Deleting an object form Database');
            return;
        } else {
            console.log(request.body.id);
            taskInfoList.find({},function (error, list) {
                if(error){
                    console.log('error fetching list');
                }else console.log(list);
            });
            return response.redirect('/application');
        }
    });
}
