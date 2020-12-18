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
                    `\`!quote\`` + ` **-->**` + ` Retrieves a random quote from Alumni... viewer discretion advised.\n\n` +
                    `\`!nickname\`` + `**-->**` + ` Finds a Brother's nickname. Usage: !nickname <first> <last>\n` +
                    `--------------------------------------------------------------------------------\n\n` +
                    `The Deputy Admiral Bot has been contributed to by Brothers Alec Rospierski, Alex Ott, and Nick McCarter.\n` +
                    `For any feature requests or bug reports, visit the repo by clicking the link from \`!code\` and creating a new issue.`;
        message.channel.send(msg);
    }
}
