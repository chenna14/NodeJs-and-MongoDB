const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    Comment:{
        type: String,
        required: true
    },
},
{timestamps:true});

module.exports = mongoose.model('Comment', commentSchema);