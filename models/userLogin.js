const mongoose = require('mongoose');
const userInfoSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    mail:{
        type: String,
        required: true
    }
});
const UserInfo = new mongoose.model('User', userInfoSchema);
module.exports = UserInfo;