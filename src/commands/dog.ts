import fetch, { Response } from 'node-fetch';

module.exports = {
    name: 'dog',
    description: 'retrieves a random picture of a dog',
    async execute(message: any, args: Array<string>) {

        const url = 'https://dog.ceo/api/breeds/image/random';

        const response: Response = await fetch(url);
        const res_json = await response.json();

        message.channel.send(res_json.message);
    },
}