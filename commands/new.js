module.exports = {
    name: 'new',
    description: "Onboarding instructions for new people",
    execute(message, args) {

        // make sure message is in onboarding
        if (message.channel.name !== 'onboarding') {
            message.reply('This command can only be used in #onboarding');
            return;
        }

        message.reply('Welcome!\nIf you are a friend of the chapter please type !iam friend\nIf you are an Active member, please type !iam active\nIf you are an Alumni member, please type !iam alumni');
    }
}