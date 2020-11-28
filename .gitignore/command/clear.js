const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Clear extends Command {
    
    static match (message) {
        if (message.content.startsWith('b!clear')){
            return true
        }
    }

    static action (message) {

        let msg = message.content.split(' ')
        msg.shift()

        if (message.content === 'b!clear') {

            message.reply('Commbien de messages à supprimé ?')
        }
        
        else {

            let x = parseInt(msg[0], 10)
            if (x > 100) {
                x = 100
            }

            message.delete()
            message.channel.bulkDelete(x)
            message.reply(x + ' messages supprimés')
            message.channel.bulkDelete(1)
        }
    }
}