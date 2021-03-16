const express = require('express');
const app = express();
const getChats = require('./api/routes/chats');

app.use('/chats', getChats);

module.exports = app;