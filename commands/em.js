const Discord = require('discord.js');
module.exports = {
    name: 'em' ,
    description: "call a emergency meeting",
    execute(message,args,client){   
        
        const parentchan = message.channel.parentID
        const thevoicechannel = client.channels.cache.find(channel => (channel.name == 'VoiceChannel' && channel.parentID == parentchan))
        const textchan = message.channel.id;
        const textchannel = client.channels.cache.find(channel => channel.id === textchan)

        if(message.channel.name === 'hosttext' && message.member.voice.channel === thevoicechannel){

            
            const eminfo = new Discord.MessageEmbed() 
                    .setTitle('**EMERGENCY MEETING**')
                    .addField('Caller: ',message.author)
                    .addField('Who is sus?','Have a discussion with your fellow players\n and find out who is the imposter (or not)')
                    .setColor(0xA93226);

            const ingamerole = message.guild.roles.cache.find(role => role.name === 'In Game')
            const inEMrole = message.guild.roles.cache.find(role => role.name === 'Emergency Call')

            for (const [memberID, member] of thevoicechannel.members) {
                
                console.log('unMuted a member');

                member.roles.remove(ingamerole,'cool');
                member.roles.add(inEMrole,'cool');

                if(!member.roles.cache.some(role => role.name === 'Death')){
                    member.voice.setMute(false);
                }
                
              }

              textchannel.send(eminfo);

        }else{
            if(message.channel.name === 'hosttext' && !(message.member.voice.channel === thevoicechannel)){
                const errorinfo = new Discord.MessageEmbed() 
                    .setTitle('**Command not send**')
                    .addField('You cannot send this command here','You cannot send this command here because you are not in the voice channel of this hosted game')
                    .setColor(0xA93226);

                    textchannel.send(errorinfo).then(msg => {
                        msg.delete({ timeout: 4000 })
                      });;
            }
            else{
                message.channel.send('You cannot send this command here').then(msg => {
                    msg.delete({ timeout: 4000 })
                  });;
            }
            
        }


    }
}