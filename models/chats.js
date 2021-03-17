const mongoose = require('mongoose');

const chats = mongoose.Schema({
    name:{type:String},
    chats : {type: String},
})

module.exports = mongoose.model('chats',chats);