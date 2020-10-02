const Discord = require('discord.js');
module.exports = {
    name: 'death' ,
    description: "when youre death",
    execute(message,args,client){      


        if(message.channel.name === 'hosttext'){


            const deathrole = message.guild.roles.cache.find(role => role.name === 'Death')
            
            message.member.roles.add(deathrole,'cool');

            const deathinfo = new Discord.MessageEmbed() 
                    .setTitle('**Press F for fallen member**')
                    .addField('💀 Dead:',message.author)
                    .setColor(0x2ECC71);

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

            message.channel.send('You cannot send this command here');
        }


    }
}