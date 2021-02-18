let mongoose = require('mongoose');

var schema= new mongoose.Schema({
    First_Name: { type: String, required : true},
    Last_Name:{type:String, required:true},
    Email:{type:String, required:true},
    Password:{type:String, required:true},
    Phone_Number:{type:Number, required:true}
});

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb; 
