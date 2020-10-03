const Discord = require('discord.js');
const botConfig = require('../botconfig.json');
module.exports = {
    name: 'hostgame' ,
    description: "create a game",
    execute(message,args,client){       
    const hostrole = message.guild.roles.cache.find(role => role.name === 'Game Host')
    const hostedgamechannel = message.guild.channels.cache.find(channel => channel.name === 'hosted-games')
    console.log(hostedgamechannel);

    if(message.channel.name === 'create-a-game' && !(message.member.roles.cache.some(role => role.name === 'Game Host'))){
        const gamecode = message.content.replace('-hostgame','');
        //const deathrole = message.guild.roles.cache.find(role => role.name === 'Death')
        //const ingamerole = message.guild.roles.cache.find(role => role.name === 'InGame')




        
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
                    .addField('Commands:','here is a list of commands and what they do: \n **-lobby**: when you are in the lobby\n **-em**: when a Emergency meeting is called or some one is dead \n **-death**: when youre a ghost\n **-play**: when you start playing again after a meeting \n **-end**: this will delete this channel only the host can use this command')
                    .setColor(0xF1C40F)
                   
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

        const hostedinfo = new Discord.MessageEmbed() 
                    .setTitle('**Game Hosted!**')
                    .addField('Game Host:', message.author)
                    .addField('Is hosting a game!',' Come and join the game!')
                    .setColor(0x2980B9)
        hostedgamechannel.send(hostedinfo)



    }
    else{
        
        const errorinfo = new Discord.MessageEmbed() 
                    .setTitle('**You forgot the game code!**')
                    .setColor(0x7B241C)
        message.channel.send(errorinfo).then(msg => {
            msg.delete({ timeout: botConfig.delete_message_time })
          });
    }


    }
    else{
        
        if(message.member.roles.cache.some(role => role.name === 'Game Host')){
            const errorinfo = new Discord.MessageEmbed() 
                    .setTitle('**You already have a game hosted!**')
                    .addField('You can not host two games at the same time','please end your first game and then you can host a new game')
                    .setColor(0x7B241C)
        message.channel.send(errorinfo).then(msg => {
            msg.delete({ timeout: botConfig.delete_message_time })
          });

        }
        else{
            message.channel.send('You cannot send this command here').then(msg => {
                msg.delete({ timeout: botConfig.delete_message_time })
              });
        }
        
    }    

 
    }
}