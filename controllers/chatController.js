const Chat = require('../models/chats');


module.exports.chat = async (req,res) => {
    try {
        const chat = await Chat.create(req.body);
        // console.log(chat)
        res.status(201).send(chat)
    } catch (error) {
        res.status(404).json(error);
    }

}