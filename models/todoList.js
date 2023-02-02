const mongoose = require('mongoose');
const taskInfoSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    priority:{
        type: Number,
        required: true
    },
    cateogory:{
        type: String,
        required: true
    },
    startDateTime:{
        type: Date,
        required: false
    },
    endDateTime:{
        type: Date,
        required: false
        
    }
});

const taskInfo = new mongoose.model('Tasks', taskInfoSchema);
module.exports = taskInfo;