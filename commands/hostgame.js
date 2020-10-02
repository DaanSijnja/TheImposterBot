const Discord = require('discord.js');
module.exports = {
    name: 'hostgame' ,
    description: "create a game",
    execute(message,args,client){       


    if(message.channel.name === 'create-a-game'){
        const gamecode = message.content.replace('-hostgame','');
        //const deathrole = message.guild.roles.cache.find(role => role.name === 'Death')
        //const ingamerole = message.guild.roles.cache.find(role => role.name === 'InGame')
        const hostrole = message.guild.roles.cache.find(role => role.name === 'Game Host')
        message.member.roles.add(hostrole,'cool');

    if(gamecode != '')  {
        message.guild.channels.create('Hosted Game',{
            type: 'category'
      
        }).then((channel) =>{
            console.log(channel)
            
            //const deathrole = message.guild.roles.cache.find(role => role.name === 'Death')

            const parrentchannel = channel.id

            message.guild.channels.create('HostText',{
                type: 'text'
            }).then((channel) =>{
                console.log(channel)
                const textchan = channel.id;
                const texchannel = client.channels.cache.find(channel => channel.id === textchan)
                
                const gameinfo = new Discord.MessageEmbed() 
                    .setTitle('**Welcome to this Game!**')
                    .addField('Game code:',gamecode)
                    .addField('Game Host:',message.author)
                    .addField('Commands:','here is a list of commands and what they do: \n **-start**: this starts the game\n **-em**: when a Emergency meeting is called or some one is dead \n **-death**: when youre a ghost\n **-play**: when you start playing again after a meeting \n **-end**: this will delete this channel only the host can use this command')
                    .setColor(0x2ECC71)
                   
                texchannel.send(gameinfo);

                channel.setParent(parrentchannel)
            })
            message.guild.channels.create('VoiceChannel',{
                type: 'voice'
            }).then((channel) =>{
                console.log(channel)
                
                channel.setParent(parrentchannel)
                channel.setUserLimit(10)
            })
      

        })

    }
    else{
        console.log('error')

    }


    }
    else{
        
        message.channel.send('You cannot send this command here');
    
    }    

 
    }
}