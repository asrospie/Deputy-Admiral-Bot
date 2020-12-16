const getURL = 'https://script.google.com/macros/s/AKfycbwbXKUIzHxXVY-pjKlx4SaY9EE85JmnkhgPlc4Ho_5XU8Nk56yI/exec'

module.exports = {
    name: 'quote',
    description: "Get a quote from the \"database\".",
    execute(message, args) {
        const snark = ["I can't believe someone actually said this", "Who on earth would say a thing like this", "These are anonymous, not judgement-free", "And yet we __still__ let this person join", ":person_facepalming: This is a doozy", "Here, just take it", "You made me read this with my own ~~eyes~~ code"]

        const snarksnip = snark[Math.random() * snark.length - 1]

        const response = await fetch(getURL);

        const quoteArr = await response.text().split("`");

        const quote = quoteArr[Math.random() * (quoteArr.length - 2)]

        message.channel.send(snarksnip+":\n> "+quote+"\n*These quotes are anonymized, and are in no way meant to be defamatory.*\nIf you'd like to add a quote, you can enter it here: <https://bit.ly/3gTJLl3>");
    }
}