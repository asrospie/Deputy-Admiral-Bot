"use strict";
var Discord = require('discord.js');
var client = new Discord.Client();
var fs = require('fs');
var token = '';
// Retrieve Secret from env file
// If in developmen
if (process.argv[2] === 'dev') {
    try {
        token = fs.readFileSync('secret.env', 'utf-8');
    }
    catch (e) {
        console.log('Error: ', e.stack);
    }
}
else {
    token = process.env.BOT_TOKEN;
}
var prefix = '!';
client.commands = new Discord.Collection();
var commandFiles = fs.readdirSync('./build/commands/').filter(function (file) { return file.endsWith('.js'); });
commandFiles.forEach(function (file) {
    var command = require("./commands/" + file);
    client.commands.set(command.name, command);
});
// Bot boot up message
client.on('ready', function () {
    console.log("Logged in as " + client.user.tag + "!");
});
// On New Member
client.on('guildMemberAdd', function (member) {
    var channel = member.guild.channels.cache.find(function (ch) { return ch.name === 'general'; });
    if (!channel)
        return;
    channel.send("Welcome to the Arctic Chapter of Triangle Fraternity!\nPlease follow the guide by typing !new in the onboarding channel");
});
client.on('message', function (message) {
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;
    var args = message.content.slice(prefix.length).split(/ +/);
    var command = args.shift().toLowerCase();
    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    else if (command === 'new') {
        client.commands.get('new').execute(message, args);
    }
    else if (command === 'iam') {
        client.commands.get('iam').execute(message, args);
    }
    else if (command === 'help') {
        client.commands.get('help').execute(message, args);
    }
    else if (command === 'code') {
        client.commands.get('code').execute(message, args);
    }
    else if (command === 'quote') {
        client.commands.get('quote').execute(message, args);
    }
});
client.login(token);
