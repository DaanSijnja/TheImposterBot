const Discord = require('discord.js');
module.exports = {
    name: 'death' ,
    description: "when youre death",
    execute(message,args,client){      

        const parentchan = message.channel.parentID
        const thevoicechannel = client.channels.cache.find(channel => (channel.name == 'VoiceChannel' && channel.parentID == parentchan))

        if(message.channel.name === 'hosttext' && message.member.voice.channel === thevoicechannel){


            const deathrole = message.guild.roles.cache.find(role => role.name === 'Death')
            
            message.member.roles.add(deathrole,'cool');

            const deathinfo = new Discord.MessageEmbed() 
                    .setTitle('**Press F for fallen member**')
                    .addField('💀 Dead:',message.author)
                    .setColor(0x666699);

            const textchan = message.channel.id;
            const texchannel = client.channels.cache.find(channel => channel.id === textchan)
            texchannel.send(deathinfo);

            console.log(deathrole.name)
            //message.member.addRole(role);

            const par = message.channel.parent
            const voice = client.channels.cache.find(channel => (channel.name == 'VoiceChannel' && channel.parentID == par))
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
                    .addField('You cannot send this command here','You cannot send this command here because \n you are not in the voice channel of this hosted game')
                    .setColor(0xA93226);


            }
            else{
                message.channel.send('You cannot send this command here');
            }
        }


    }
}