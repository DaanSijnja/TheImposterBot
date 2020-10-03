const Discord = require('discord.js');
const botConfig = require('../botconfig.json');
module.exports = {
    name: 'creategame' ,
    description: "create a game",
    execute(message,args,client){       


    if(message.channel.name === 'create-a-game'){
       
        //const deathrole = message.guild.roles.cache.find(role => role.name === 'Death')
        //const ingamerole = message.guild.roles.cache.find(role => role.name === 'InGame')

        message.guild.channels.create('Game',{
            type: 'category'
      
        }).then((channel) =>{
            console.log(channel)
            
            //const deathrole = message.guild.roles.cache.find(role => role.name === 'Death')

            const parrentchannel = channel.id

            message.guild.channels.create('GameText',{
                type: 'text'
            }).then((channel) =>{
                console.log(channel)
                const textchan = channel.id;
                const texchannel = client.channels.cache.find(channel => channel.id === textchan)
                
                const gameinfo = new Discord.MessageEmbed() 
                    .setTitle('**Welcome to this Game!**')
                    .addField('Game code:','Ask the people in the voice channel for the code')
                    .addField('Commands:','-end this delete this games channels')
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

    }
    else{
        
        message.channel.send('You cannot send this command here').then(msg => {
            msg.delete({ timeout: botConfig.delete_message_time })
          });;
    
    }    

 
}   
}