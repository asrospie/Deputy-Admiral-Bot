const map = {
    'friend': 'Friend',
    'alumni': 'Alumni',
    'active': 'Active',
};

module.exports = {
    name: 'iam',
    description: "Assign a member a role",
    async execute(message, args) {
        // make sure message is contained in onboarding
        if (message.channel.name !== 'onboarding') {
            message.reply('This command can only be used in #onboarding');
            return;
        }

        // make sure message contains only one option
        if (args.length === 0 || args.length > 1) {
            message.reply('Please provide one of three options.\nfriend, active, or alumni');
            return;
        }

        // fetch all of the roles in the guild
        const roles = await message.guild.roles.fetch();
        let roleIDs = [];
        let roleNames = [];
        roles.cache.forEach((r, idx) => {
            roleNames.push(r.name);
            roleIDs.push(idx);
        });

        // Check to see if member already holds one of the auto roles
        let cur_roles = message.member.roles.member._roles;
        let holder = false;

        cur_roles.forEach(cr => {
            let r = roles.cache.find(r => cr === r.id).name;
            Object.keys(map).forEach(role => {
                if (map[role] === r) {
                    holder = true;
                }
            });
        });

        if (holder) {
            message.reply(`You already hold an automatic role. Message a moderator if it is incorrect.`);
            return;
        }

        // If valid role requested, assign role, else, return not valid
        if (Object.keys(map).find(r => r === args[0].toLowerCase())) {
            message.guild.roles.fetch().then(roles => {
                let role = roles.cache.find(r => r.name === map[args[0].toLowerCase()]);
                message.member.roles.add(role);
                message.reply(`You have been assigned the role ${role.name}!`);
            });
        } else {
            message.reply(`${args[0]} is not a valid role to be automatically assigned.`);
        }
    },
}