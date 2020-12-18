module.exports = {
    name: 'help',
    description: "Use this to see what I can do!",
    execute(message: any, args: Array<string>) {

        // This needs to be re-formatted, working on it!!
        const msg = `Here's what I can do!\n\n` +
                    `--------------------------------------------------------------------------------\n` +
                    `\`!new\`` + `    **-->**` + ` If you're new, use this command for the onboarding process (must be used in onboarding)\n\n` +
                    `\`!iam\`` + `    **-->**` + ` Used in the onboarding process. Use this with one of the following roles: friend, active, alumni (must be used in onboarding)\n\n` +
                    `\`!help\`` + `  **-->**` + ` Use this command if you need help\n\n` +
                    `\`!ping\`` + `  **-->**` + ` Try it!\n\n` +
                    `\`!quote\`` + ` **-->**` + ` Retrieves a random quote from Alumni... viewer discretion advised.\n` +
                    `--------------------------------------------------------------------------------\n\n` +
                    `The Deputy Admiral Bot was created by Br. Adm. Alec Rospierski.\nAny bugs that are found are to be reported to the Office of the Admiral.`;
        message.channel.send(msg);
    }
}
