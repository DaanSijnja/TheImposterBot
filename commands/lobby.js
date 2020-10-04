const Discord = require('discord.js');
const botConfig = require('../botconfig.json');
module.exports = {
    name: 'lobby' ,
    description: "when youre in the lobby with youre friends!",
    execute(message,args,client){      

        const parentchan = message.channel.parentID
        const thevoicechannel = client.channels.cache.find(channel => (channel.name == 'VoiceChannel' && channel.parentID == parentchan))
        const textchan = message.channel.id;
        const textchannel = client.channels.cache.find(channel => channel.id === textchan)

        const deathrole = message.guild.roles.cache.find(role => role.name === 'Death')
        const ingamerole = message.guild.roles.cache.find(role => role.name === 'In Game')
        const inEMrole = message.guild.roles.cache.find(role => role.name === 'Emergency Call')
        const inlobbyrole = message.guild.roles.cache.find(role => role.name === 'In Lobby')      
        

        if(message.channel.name === 'hosttext' && message.member.voice.channel === thevoicechannel && message.member.roles.cache.some(role => role.name === 'Game Host')){


            

            const lobbyinfo = new Discord.MessageEmbed() 
                    .setTitle('**Lobby Time!**')
                    .addField('Customize youre Player!','The game will start soon so choose your outfit!')
                    .setColor(0xE67E22);

            
            textchannel.send(lobbyinfo).then(msg => {
                console.log('delete message lobbyinfo')
                msg.delete({ timeout: botConfig.hosttext_del, reason: 'Delete command.'})
              });;

            
            for (const [memberID, member] of thevoicechannel.members) {
                
                console.log('unMuted a member');

                member.roles.remove(ingamerole,'remove role');
                member.roles.remove(inEMrole,'remove role');
                member.roles.remove(deathrole,'remove role');
                member.roles.add(inlobbyrole,'remove role');
                member.voice.setMute(false);

            }


         
            
        

       

        }else{
            if(message.channel.name === 'hosttext' && !(message.member.voice.channel === thevoicechannel)){
                const errorinfo = new Discord.MessageEmbed() 
                    .setTitle('**Command not send**')
                    .addField('You cannot send this command here','You cannot send this command here because you are not in the voice channel of this hosted game')
                    .setColor(0xA93226);
                textchannel.send(errorinfo).then(msg => {
                    msg.delete({ timeout: botConfig.delete_message_time })
                  });;

            }
            else{
                message.channel.send('You cannot send this command here').then(msg => {
                    msg.delete({ timeout: botConfig.delete_message_time })
                  });;
            }
        }


    }
}