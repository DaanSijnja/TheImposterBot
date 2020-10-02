const Discord = require('discord.js');
module.exports = {
    name: 'play' ,
    description: "when you play the game",
    execute(message,args,client){      

        const parentchan = message.channel.parentID
        const thevoicechannel = client.channels.cache.find(channel => (channel.name == 'VoiceChannel' && channel.parentID == parentchan))

        if(message.channel.name === 'hosttext' && message.member.voice.channel === thevoicechannel){
            
            
            const playinfo = new Discord.MessageEmbed() 
                    .setTitle('**The game starts again**')
                    .addField('**Do your tasks**','Crewmates do your tasks and Imposters try to kill them all!')
                    .setColor(0x1E8449);

            const ingamerole = message.guild.roles.cache.find(role => role.name === 'In Game')
            const inEMrole = message.guild.roles.cache.find(role => role.name === 'Emergency Call')
            const inlobbyrole = message.guild.roles.cache.find(role => role.name === 'In Lobby')       
            

            for (const [memberID, member] of thevoicechannel.members) {
              
                console.log('Muted a member');

                member.roles.add(ingamerole,'add role');
                member.roles.remove(inEMrole,'remove role');
                member.roles.remove(inlobbyrole,'remove role');
                member.voice.setMute(true);
              }



              message.channel.send(playinfo);


        }else{
            if(message.channel.name === 'hosttext' && !(message.member.voice.channel === thevoicechannel)){
                const errorinfo = new Discord.MessageEmbed() 
                    .setTitle('**Command not send**')
                    .addField('You cannot send this command here','You cannot send this command here because \n you are not in the voice channel of this hosted game')
                    .setColor(0xA93226);


            }
            else{
                message.channel.send('You cannot send this command here');
            }
        }


    }
}