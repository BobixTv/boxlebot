const Discord = require('discord.js')
const bot = new Discord.Client()

const Command = require('./command/command')
const Ping = require('./command/ping')
const Clear = require('./command/clear')

bot.on('message', message => {
    Ping.parse(message)
    Clear.parse(message)
  })


bot.login(process.env.TOKEN)

bot.on('ready', () => {
    console.log('This bot is active!');
  })


bot.on("guildMemberAdd", member => {
    member.createDM().then(channel => {
      return channel.send("Salut toi :wave:. Nous te souhaitons la bienvenue dans le serveur de Bobix.")
  })
})
bot.on('guildMemberAdd', member => {
  member.guild.channels.get('782277062819708958').send('Salut **' + member.user.username + "** !" + " Bienvenue sur le serveur officiel de Bobix :tada: !") 
});
