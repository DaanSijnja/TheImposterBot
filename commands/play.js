const Discord = require('discord.js');
module.exports = {
    name: 'play' ,
    description: "when you play the game",
    execute(message,args,client){      
        if(message.channel.name === 'hosttext'){
            
            const par = message.channel.parent
            const vcch = client.channels.cache.find(channel => (channel.name == 'VoiceChannel' && channel.parentID == par))
            const playinfo = new Discord.MessageEmbed() 
                    .setTitle('**The game starts again**')
                    .addField('**Do your tasks**','Crewmates do your tasks and Imposters try to kill them all!')
                    .setColor(0x1E8449);

            const ingamerole = message.guild.roles.cache.find(role => role.name === 'In Game')
            const inEMrole = message.guild.roles.cache.find(role => role.name === 'Emergency Call')
                    
            for (const [memberID, member] of vcch.members) {
              
                console.log('Muted a member');

                member.roles.add(ingamerole,'cool');
                member.roles.remove(inEMrole,'cool');
                member.voice.setMute(true);
              }



              message.channel.send(playinfo);


        }else{
            message.channel.send('You cannot send this command here');
        }


    }
}