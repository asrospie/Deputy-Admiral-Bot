"use strict";
module.exports = {
    name: 'ping',
    description: "this is a test command",
    execute: function (message, args) {
        message.reply('dev!');
    }
};
