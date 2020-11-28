const Discord = require ("discord.js");
const Command = require('./command')

module.exports = class ping extends Command {

    static match(message) {
        if(message.content === "b!ping"){
            return true
        }
    }

    static action(message) {
        message.channel.send('pong')
    }
}