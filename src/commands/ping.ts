module.exports = {
    name: 'ping',
    description: "this is a test command",
    execute(message: any, args: Array<any>) {
        message.reply('dev!');
    }
}