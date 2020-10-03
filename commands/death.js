const Discord = require('discord.js');
const botConfig = require('../botconfig.json');
module.exports = {
    name: 'death' ,
    description: "when youre death",
    execute(message,args,client){      

        const parentchan = message.channel.parentID
        const thevoicechannel = client.channels.cache.find(channel => (channel.name == 'VoiceChannel' && channel.parentID == parentchan))
        const textchan = message.channel.id;
        const textchannel = client.channels.cache.find(channel => channel.id === textchan)

        if(message.channel.name === 'hosttext' && message.member.voice.channel === thevoicechannel){


            const deathrole = message.guild.roles.cache.find(role => role.name === 'Death')
            
            message.member.roles.add(deathrole,'cool');

            const deathinfo = new Discord.MessageEmbed() 
                    .setTitle('**Press F for fallen member**')
                    .addField('💀 Dead:',message.author)
                    .setColor(0x666699);

            
            textchannel.send(deathinfo);

            console.log(deathrole.name)
            //message.member.addRole(role);

            const par = message.channel.parent
            
            console.log(par);
            console.log(deathrole.id);
       
           

            const meb = message.guild.member(message.author);

           // const us = message.author.member;
            
            console.log(meb.voice);

            meb.voice.setMute(true);
            
            
            
            //setChannel(gen)

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