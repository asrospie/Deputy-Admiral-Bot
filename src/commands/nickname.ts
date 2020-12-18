import fetch, { Response } from 'node-fetch';

if (process.argv[2] === 'dev') {
    require('dotenv').config();
}

const url = process.env.NICKNAME_TOKEN!;

module.exports = {
    name: 'nickname',
    description: `Retrieve a brother's nickname.`,
    async execute(message: any, args: Array<string>) {

        const response: Response = await fetch(url);

        const text: string = await response.text();

        // separate text into array
        const sepNames: Array<string> = text.split(',');

        const first = args[0];
        const last = args[1];
        let fullName: String = '';

        sepNames.forEach((name: string, idx: number) => {
            if (name.trim() === first && sepNames[idx + 1].trim() === last) {
                // if about to reach end, skip last iterations
                if (idx === sepNames.length - 4) return;

                // if none, return none
                // else, return full name
                if (sepNames[idx + 2].toLowerCase() === 'none') {
                    fullName = 'none';
                } else {
                    fullName = `${first} "${sepNames[idx + 2].trim()}" ${last}`;
                }
            }
        });

        // if nickname not found notify brother doesn't exist
        // else if nickname is none, ask if update needed
        // else send nickname
        if (fullName === '') {
            message.channel.send(`A Brother by the name of ${args[0]} ${args[1]} was not found.\n` + 
                `First, try another spelling of their name i.e. Matt = Matthew and Dan = Daniel before the next option.\n` +
                `If you know the Brother and their nickname, consider adding them to the spreadsheet here:\n` + 
                `<https://forms.gle/1NsD9bpBTpE9KdLg8>`
            );
            return;
        } else if (fullName === 'none') {
            message.channel.send(`${args[0]} ${args[1]} does not have a nickname. If this is a mistake or needs to be udpated visit:\n` + 
                `<https://forms.gle/1NsD9bpBTpE9KdLg8>`
            );
        } else {
            message.channel.send(fullName);
        }

    },
};