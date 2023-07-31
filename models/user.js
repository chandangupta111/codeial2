const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require: true,
        unique: true,
    },
    password: {
        type:String,
        // require :retrue,
        require :true
    },
    name: {
        type: String,
        require: true,
    }
}, {
    timetamps: true
});

const User = mongoose.model('User',userSchema);
module.exports = User;