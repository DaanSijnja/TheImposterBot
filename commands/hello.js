const Discord = require("discord.js");
const botConfig = require('../botconfig.json');
module.exports = {
    name: 'hello' ,
    description: "simple hello command!",
    execute(message,args){
       
    const errorinfo = new Discord.MessageEmbed() 
        .setTitle('**Command not send**')
        .addField('You cannot send this command here','You cannot send this command here because you are not in the voice channel of this hosted game')
        .setColor(0xA93226)
     
    message.channel.send(errorinfo).then(msg => {
        msg.delete({ timeout: 4000 })
      });;

    }
}