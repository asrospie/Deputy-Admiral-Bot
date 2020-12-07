const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

// Retrieve Secret from env file
let token;
try {
    token = fs.readFileSync('secret.env', 'utf-8');
} catch(e) {
    console.log('Error: ', e.stack);
} 

const prefix = '!';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
commandFiles.forEach(file => {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
})

// Bot boot up message
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// On New Member
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the Arctic Chapter of Triangle Fraternity!\nPlease follow the guide by typing #new in the bot channel`);
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'new') {
        client.commands.get('new').execute(message, args);
    } else if (command === 'iam') {
        client.commands.get('iam').execute(message, args);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args);
    } else if (command === 'code') {
        client.commands.get('code').execute(message, args);
    }
})

client.login(token);