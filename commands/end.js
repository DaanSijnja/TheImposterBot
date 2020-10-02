const Discord = require('discord.js');
module.exports = {
    name: 'end' ,
    description: "end a game",
    execute(message,args,client){      
        if(message.channel.name === 'hosttext'){
            if(message.member.roles.cache.some(role => role.name === 'Game Host')){
                
                const deathrole = message.guild.roles.cache.find(role => role.name === 'Death')
                const ingamerole = message.guild.roles.cache.find(role => role.name === 'In Game')
                const inEMrole = message.guild.roles.cache.find(role => role.name === 'Emergency Call')

                const parentchan = message.channel.parentID
                const thevoicechannel = client.channels.cache.find(channel => (channel.name == 'VoiceChannel' && channel.parentID == parentchan))
                
                
                for (const [memberID, member] of thevoicechannel.members) {
                
                    console.log('unMuted a member');
    
                    member.roles.remove(ingamerole,'cool');
                    member.roles.remove(inEMrole,'cool');
                    member.roles.remove(deathrole,'cool');
                    member.voice.setMute(false);

                }
                
                
                
                
                const game = message.channel
                console.log(parentchan);
                console.log(game.id);
                console.log(thevoicechannel.id);
                
                game.delete('delete');
                thevoicechannel.delete('delete');

                const parent = client.channels.cache.find(channel => channel.id === parentchan)
                parent.delete('delete');

                


            }
            

        }else if(message.channel.name === 'gametext'){
            
            const par = message.channel.parentID
            console.log(par);
            const game = message.channel
            console.log(game.id);
            const voice = client.channels.cache.find(channel => (channel.name == 'VoiceChannel' && channel.parentID == par))
            console.log(voice.id);
          

            const parent = client.channels.cache.find(channel => channel.id === par)
            game.delete('delete');
            voice.delete('delete');
            parent.delete('delete');
            
            

        }else{
            message.channel.send('You cannot send this command here');
        }


    }
}