const Discord = require("discord.js");
const botConfig = require('../botconfig.json');
module.exports = {
    name: 'update' ,
    description: "update command type this to see the new features or changes",
    execute(message,args,client){
    
    if(!(message.channel.name === 'hosttext' || message.channel.name === 'create-a-game' || message.channel.name === 'hosted-games' || message.channel.name === 'gametext')){
        const updateinfo = new Discord.MessageEmbed() 
            .setTitle('**Latest Update**')
            .addField('**New Features**','-Update Command: with this command you can see the latest update, new features, changes and bugfixes. \n -Help Command: You can use this command for help this also shows all the commands there are with explanations. \n -Bye Command: You use this command when you leave a hosted game')
            .addField('**Changes**','-All messages from the bot in the HostText channel are removed after 30 seconds')
            .addField('**Bugfixes**','-When use init the Create-A-Game and Hosted-Games do better checks if the channels already exists')
            .setFooter('version: ' + botConfig.vers)
            .setColor(0xD35400);
     
        message.channel.send(updateinfo)
    }
    else{
        message.channel.send('You cannot send this command here').then(msg => {
            msg.delete({ timeout: botConfig.delete_message_time })
          });;
    }


    }
}