const db = require('../config/mongoose');                                            // Fetching Mongoose configuration file
const UserLoginInfo = require('../models/userLogin');  
const alert = require('alert');  
module.exports.verify = function(request, response){
    UserLoginInfo.findOne({'username': `${request.body.username}`},function(error, user){
        if(error) {
            console.log('Error in fetching UserInfo from Db');
            return;
        }else {
            if(user.length == 0){
                alert("Username not Found");
                return response.redirect('back');
            }else {
                if(user.password === request.body.password) return response.end('Hello your are authorized');
                else{
                    alert("Password is Incorrect please Retry");
                    return response.redirect('back');
                }
            }
        }
    });
}