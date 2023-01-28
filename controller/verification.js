const db = require('../config/mongoose');                                            // Fetching Mongoose configuration file
const UserLoginInfo = require('../models/userLogin');  
module.exports.verify = function(request, response){
    const username1 = request.body.username;
    UserLoginInfo.find({'username': `${username1}`},function(error, contacts){
        if(error) {
            console.log('Error in fetching UserInfo from Db');
            return;
        }else return response.end('<h1>You are verifed Successfully</h1>');
    });
   
}