module.exports = {
    name: 'code',
    description: "Use this to see how I'm made",
    execute(message: any, args: Array<string>) {

        // post the link
        message.channel.send('https://github.com/asrospie/Deputy-Admiral-Bot');
    }
}