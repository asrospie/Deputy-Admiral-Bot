"use strict";
module.exports = {
    name: 'help',
    description: "Use this to see what I can do!",
    execute: function (message, args) {
        // This needs to be re-formatted, working on it!!
        var msg = "Here's what I can do!\n\n!new : If you're new, use this command for the onboarding process (must be used in onboarding)\n!iam : Used in the onboarding process. Use this with one of the following roles: friend, active, alumni (must be used in onboarding)\n!help : use this command if you need help\n!ping : Try it!\n!quote : Retrieves a random quote from Alumni... viewer discretion advised.\n\nThe Deputy Admiral Bot was created by Br. Adm. Alec Rospierski.\nAny bugs that are found are to be reported to the Office of the Admiral.";
        message.channel.send(msg);
    }
};
