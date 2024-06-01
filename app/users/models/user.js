const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:String,
    posts:[{
        type:Schema.Types.ObjectId,
        ref:'Post'
    }],
    comments:[{
        type:Schema.Types.ObjectId,
        ref:'Comment'
    }],
    likes:[{
        type:Schema.Types.ObjectId,
        ref:'Like'
    }]
}, {timestamps:true});

module.exports = mongoose.model('User', userSchema);