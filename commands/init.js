const Discord = require('discord.js');

module.exports = {
    name: 'init' ,
    description: "initalize the server for game use",
    execute(message,args,client){

        if(message.member.hasPermission(0x00000008)){

        


        message.guild.channels.create('create-a-game',{
            type: 'text'
        }).then((channel) =>{
            console.log(channel)
            const crgame = channel.id;
            const crgamesend = client.channels.cache.find(channel => channel.id === crgame)
            const createinfo = new Discord.MessageEmbed() 
                    .setTitle('**Here you can Create and Host a game!**')
                    .addField('**How to host a game**:','-Type -hostgame and youre gamecode\n **example**: -hostgame CODEQQ \n You use this command when you dont change from gamecode and want to play serious ')
                    .addField('**How to create a game**:','-Type -creategame and you type the gamecode in chat\n')
                    .addField('**How to join a game**:','-Joining a game is simple! \n You will find the active games with the channels\n -A game is full when there are 10 people in the voice channel, \n so first join a voice channel and then join the Among Us lobby')
                    .setColor(0x884EA0)


            crgamesend.send(createinfo);
        })

        message.guild.channels.create('hosted-games',{
            type: 'text'
        }).then((channel) =>{
            console.log(channel)
            const hostedgame = channel.id;
            const hostedgamesend = client.channels.cache.find(channel => channel.id === hostedgame)
            const hostnotificationsinfo = new Discord.MessageEmbed() 
                    .setTitle('**Notifications of the games hosted**')
                    .addField('What is this channel?','In this channel you find al the games that are hosted')
                    .setColor(0x884EA0)


            hostedgamesend.send(hostnotificationsinfo);
        })
        
        let deathRole = message.guild.roles.create({
            data:{
                name: 'Death',
                color: 0x666699,
                permissions: 1051648,
                permissions_new: "1051648"

            }
        })

        let InGameRole = message.guild.roles.create({
            data:{
                name: 'In Game',
                color: 0x1E8449,
                permissions: 1051648,
                permissions_new: "1051648"

            }
        })

        let Emrole = message.guild.roles.create({
            data:{
                name: 'Emergency Call',
                color: 0xA93226,
                permissions: 3148800,
                permissions_new: "3148800"

            }
        })

        let leaderrole = message.guild.roles.create({
            data:{
                name: 'Game Host',
                color: 0xF1C40F,
                permissions: 3148800,
                permissions_new: "3148800"

            }
        })

        let lobbyrole = message.guild.roles.create({
            data:{
                name: 'In Lobby',
                color: 0xE67E22,
                permissions: 3148800,
                permissions_new: "3148800"

            }
        })
        

        const done = new Discord.MessageEmbed()
            .setTitle('Init done')
            .addField('The initalisation is done now you can play games!','Have fun!')
            .setColor(0x2ECC71)
        message.channel.send(done);
        
    }
    else{
        message.channel.send('you dont have permission to use that').then(msg => {
            msg.delete({ timeout: 4000 })
          });;

    }
        




    }
}