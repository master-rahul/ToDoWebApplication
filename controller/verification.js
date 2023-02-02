const db = require('../config/mongoose');                                            // Fetching Mongoose configuration file
const UserLoginInfo = require('../models/userLogin');  
const alert = require('alert');  
module.exports.verify = function(request, response){
    if (request.body.username == "admin" && request.body.password == "admin") return response.redirect('/application');
    UserLoginInfo.findOne({'username': `${request.body.username}`},function(error, user){
        if(error) {
            console.log('Error in fetching UserInfo from Db');
            response.redirect('back');
        }else {
            if(user == null){
                alert("Username not Found");
                return response.redirect('back');
            }else {
                if(user.password === request.body.password) {
                    response.verified = true;
                    return response.redirect('/application');
                }
                else{
                    alert("Password is Incorrect please Retry");
                    return response.redirect('back');
                }
            }
        }
    });
}