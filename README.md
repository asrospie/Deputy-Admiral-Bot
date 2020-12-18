# Deputy-Admiral-Bot

This is the Deputy Admiral Bot currently being used on the Triangle Fraternity Arctic Chapter Discord. 

## Current and Planned Features

- [x] Onboarding
- [x] Basic help command 
- [x] Random quotes from Alumni quote list
- [x] Pull alumni nicknames from Google Sheet
- [ ] Pull nautical merit points from Google Sheet
- [ ] Announcement
- [ ] Stories

## Other In To Dos

- [x] Fix the help command formatting
- [ ] Fix the automatic role assignment responses

# Contributing

The first step in contributing to this bot is to fork the repository. Once that is done, clone it to your local development environment using:
```
git clone https://github.com/{your username here}/Deputy-Admiral-Bot.git
```

Then, cd into the newly created directory and install the dependencies:
```
npm i
```

You should be ready to start!

## The Structure

This bot uses a fairly easy to understand structure. All of the code is contained within the ```src/``` directory. Here you will find the TypeScript files that make everything up. The ```commands/``` directory contains the files for all of the separate commands. 

To create a new command you must create all of the logic for the command in a new file created under the ```commands/``` directory and include the command in the if/else structure in ```main.ts```. 

## Testing
IN PROGRESS
