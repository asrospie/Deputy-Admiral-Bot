const getURL = 'https://script.google.com/macros/s/AKfycbwbXKUIzHxXVY-pjKlx4SaY9EE85JmnkhgPlc4Ho_5XU8Nk56yI/exec'

module.exports = {
    name: 'quote',
    description: "Get a quote from the \"database\".",
    execute(message, args) {

        const response = await fetch(getURL);

        const quoteArr = await response.text().split("`");

        const quote = quoteArr[Math.random() * (quoteArr.length - 2)]

        message.channel.send("Here's a quote:\n\n> ||"+quote+"||\n\n*These quotes are anonymized, and are in no way meant to be defamatory.*");
    }
}