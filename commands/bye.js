const Discord = require("discord.js");
const botConfig = require('../botconfig.json');
module.exports = {
    name: 'bye' ,
    description: "bye command when you leave the Hosted Game",
    execute(message,args,client){
       
        const parentchan = message.channel.parentID
        const thevoicechannel = client.channels.cache.find(channel => (channel.name == 'VoiceChannel' && channel.parentID == parentchan))
        const textchan = message.channel.id;
        const textchannel = client.channels.cache.find(channel => channel.id === textchan)

        const deathrole = message.guild.roles.cache.find(role => role.name === 'Death')
        const ingamerole = message.guild.roles.cache.find(role => role.name === 'In Game')
        const inEMrole = message.guild.roles.cache.find(role => role.name === 'Emergency Call')
        const inlobbyrole = message.guild.roles.cache.find(role => role.name === 'In Lobby')     

        if(message.channel.name === 'hosttext' && message.member.voice.channel === thevoicechannel){
            
            message.member.roles.remove(ingamerole,'remove role');
            message.member.roles.remove(inEMrole,'remove role');
            message.member.roles.remove(deathrole,'remove role');
            message.member.roles.remove(inlobbyrole,'remove role');

            
            const byeinfo = new Discord.MessageEmbed() 
                    .setTitle('**Bye Bye!** 👋')
                    .addField(message.author.username ,'left this lobby')
                    .setColor(0x666699);

            
            textchannel.send(byeinfo).then(msg => {
                console.log('delete message ByeInfo')
                msg.delete({ timeout: botConfig.hosttext_del, reason: 'Delete command.'})
              });





            message.member.voice.setMute(false);
            message.member.voice.kick('leave the voicechannel')



    
        }
        else{

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