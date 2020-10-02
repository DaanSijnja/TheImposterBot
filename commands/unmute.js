const Discord = require('discord.js');
module.exports = {
    name: 'unmute' ,
    description: "unmute when muted",
    execute(message,args,client){     
        
        
        const meb = message.guild.member(message.author);
        if(meb.voice.mute){
            meb.voice.setMute(false);
            
            const info = new Discord.MessageEmbed() 
                    .setTitle('✅**You are succesfully unmuted**')
                    .setColor(0x27AE60)
            message.channel.send(info).then(msg => {
                msg.delete({ timeout: 4000 })
              });
        }
        else{
            const info = new Discord.MessageEmbed() 
                    .setTitle('**You are not muted**')
                    .setColor(0x7B241C)
            message.channel.send(info).then(msg => {
                msg.delete({ timeout: 4000 })
              });

        }
    }
}