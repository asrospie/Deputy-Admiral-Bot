const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

let token: string = ''; 

// Retrieve Secret from env file
// If in developmen
if (process.argv[2] === 'dev') {
    try {
        token = fs.readFileSync('secret.env', 'utf-8');
    } catch(e) {
        console.log('Error: ', e.stack);
    } 
} else {
    token = process.env.BOT_TOKEN!; 
}

const prefix: string = '!';

client.commands = new Discord.Collection();

const commandFiles: [] = fs.readdirSync('./build/commands/').filter((file: string) => file.endsWith('.js'));
commandFiles.forEach(file => {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
})

// Bot boot up message
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// On New Member
client.on('guildMemberAdd', (member: any) => {
    const channel = member.guild.channels.cache.find((ch: any) => ch.name === 'general');
    if (!channel) return;
    channel.send(`Welcome to the Arctic Chapter of Triangle Fraternity!\nPlease follow the guide by typing !new in the onboarding channel`);
})

client.on('message', (message: any) => {
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
    } else if (command === 'quote') {
        client.commands.get('quote').execute(message, args);
    }
})

client.login(token);