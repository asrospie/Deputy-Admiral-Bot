import fetch, { Response } from 'node-fetch';

if (process.argv[2] === 'dev') {
    require('dotenv').config();
}
const getURL: string = process.env.QUOTE_TOKEN!;

module.exports = {
    name: 'quote',
    description: "Get a quote from the \"database\".",
    async execute(message: any, args: Array<any>) {
        // Why not give the bot some personality?
        const snark: Array<string> = ["I can't believe someone actually said this.", "Who on earth would say a thing like this?", "These are anonymous, not judgement-free.", "And yet we __still__ let this person join!", ":person_facepalming: This is a doozy.", "Here, just take it:", "You made me read this with my own ~~eyes~~ code?", "Comin' in hot!", "Here's a winner:", "Served up fresh.", "Look, it was a different time.", "Yeah, sure, why not.", "Context? Who needs context?", "Careful not to cut yourself on this edge! :knife:", "This one'll make someone salty.", "Beep boop :robot:, `ERROR in function fetch(getURL): line 69 failed to execu` - nah, I'm just messing with you."];

        // Grabs a random bit of snark
        const snarkSnip: string = snark[Math.floor(Math.random() * snark.length)];

        // fetch response from google app script
        const response: Response = await fetch(getURL);

        // await response -> text, then split text into an array of quotes
        const respText: string = await response.text();
        const quoteArr: Array<string> = respText.split('`');

        let quote: string = quoteArr[Math.floor(Math.random() * quoteArr.length)];

        // check if first character is a comma
        if (quote.charAt(0) === ',') {
            quote = quote.substring(1, quote.length);
        }

        // check if last character is a comma
        if (quote.charAt(quote.length - 1) === ',') {
            quote = quote.substring(0, quote.length - 1);
        }

        message.channel.send(snarkSnip+"\n> "+quote+"\n\n*These quotes are anonymized, and are in no way meant to be defamatory.*\nIf you'd like to add a quote, you can enter it here: <https://bit.ly/3gTJLl3>");
    }
}