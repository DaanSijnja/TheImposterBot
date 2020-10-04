const Discord = require("discord.js");
const botConfig = require('../botconfig.json');
module.exports = {
    name: 'help' ,
    description: "help command",
    execute(message,args,client){

    if(!(message.channel.name === 'hosttext' || message.channel.name === 'create-a-game' || message.channel.name === 'hosted-games' || message.channel.name === 'gametext')){

        const helpinfo = new Discord.MessageEmbed() 
        .setTitle('**Help!!**')
        .addField('Create-a-game Commands','**-hostgame:** with -hostgame you can host a game! you type -hostgame and then youre gamecode **example:** -hostgame AABBCC \n**-creategame:** with -creategame you can create a game without a gamecode so you can change from gamecode if you want')
        .addField('HostText Commands','**-lobby:** with -lobby u are unmuted and given the In Lobby tag also only the game host can use this command \n **-play:** with -play the whole voicechannel is muted. You use this command when the game starts \n **-em:** with -em you call a Emergency Meeting and everyone is unmuted so you can discus \n **-death:** with -death you set your self as death and you are then muted. You use this command when you are dead and when a Emergency meeting is called \n **-bye:** with -bye you leave the game and you are unmuted. You use this command when you leave a lobby \n **-end:** with -end you will delete the Hosted game. Only the Game Host can use this command')
        .addField('Mod Commands','**-init:** with -init you initalize the server so everything works \n')
        .addField('Other Commands','**-unmute:** with -unmute you unmute yourself when you forgot to type -bye when leaving a lobby \n **-help:** with -help you get this help message \n **-update:** with -update you can see which new features, changes or bugfixes there are in this version')
        .setFooter('version: ' + botConfig.vers)
        .setColor(0xD35400);
     
        message.channel.send(helpinfo)
    } 
    else{
        message.channel.send('You cannot send this command here').then(msg => {
            msg.delete({ timeout: botConfig.delete_message_time })
          });;
    }


    }
}