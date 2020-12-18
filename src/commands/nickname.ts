const nodeFetch = require('node-fetch');

if (process.argv[2] === 'dev') {
    require('dotenv').config();
}

const url = process.env.NICKNAME_TOKEN!;

module.exports = {
    name: 'nickname',
    description: `Retrieve a brother's nickname.`,
    async execute(message: any, args: Array<string>) {

        const response: Response = await nodeFetch(url);

        const text: string = await response.text();

        // separate text into array
        const sepNames: Array<string> = text.split(',');

        let names: Array<Array<string>> = []; // 2D array containing full set of names

        for (let i = 2; i < sepNames.length / 3; i += 3) {
            names.push([sepNames[i - 2], sepNames[i - 1], sepNames[i]]); // first, last, nickname
        }

        // find the nickname
        let fullName: string = '';
        names.forEach((name: Array<string>) => {
            // if the first two values match the first two argument values, there's a match
            if (name[0] === args[0] && name[1] === args[1]) {
                fullName = `${args[0]} "${name[2]}" ${args[1]}`;
            }
        });

        // if nickname not found
        if (fullName === '') {
            message.reply(`A Brother by the name of ${args[0]} ${args[1]} was not found.`);
            return;
        } else {
            message.channel.send(fullName);
        }

    },
};