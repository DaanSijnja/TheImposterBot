const Discord = require('discord.js');
const botConfig = require('../botconfig.json');
module.exports = {
    name: 'init' ,
    description: "initalize the server for game use",
    execute(message,args,client){

    let hasBotManager = message.guild.roles.cache.some(role => role.name === 'TheImposters Manager')
    
    if(hasBotManager == false){
        let BotManagerrole = message.guild.roles.create({
            data:{
                name: 'TheImposters Manager',
                color: 0x7D3C98,
                permissions: 2146958847,
                permissions_new: "2146958847"

            }
        })
    }

    if(message.member.hasPermission(0x00000008) || message.member.roles.cache.some(role => role.name === 'TheImposters Manager')){

        let hasUpdate = false;

        let hasDeathrole = message.guild.roles.cache.some(role => role.name === 'Death')
        let hasInGamerole = message.guild.roles.cache.some(role => role.name === 'In Game')
        let hasEMrole = message.guild.roles.cache.some(role => role.name === 'Emergency Call') 
        let hasGameHostrole = message.guild.roles.cache.some(role => role.name === 'Game Host')
        let hasLobbyrole = message.guild.roles.cache.some(role => role.name === 'In Lobby')
        

        let hasCreateAGamechannel = client.channels.cache.some(channel => channel.name = 'create-a-game')
        let hasHostedGameschannel = client.channels.cache.some(channel => channel.name = 'hosted-games')


        console.log("Deathrole:" + hasDeathrole)
        console.log("InGamerole:" + hasInGamerole)
        console.log("EMrole:" + hasEMrole)
        console.log("GameHostrole:" + hasGameHostrole)
        console.log("Lobbyrole:" + hasLobbyrole)

        console.log("CreateAGamechannel:" + hasCreateAGamechannel)
        console.log("HostedGamechannel:" + hasHostedGameschannel)






        if(hasCreateAGamechannel == false)
        {
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
            hasUpdate = true;
        }


        if(hasHostedGameschannel == false)
        {
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

            hasUpdate = true;
        }


        if(hasDeathrole == false){

            let deathRole = message.guild.roles.create({
                data:{
                    name: 'Death',
                    color: 0x666699,
                    permissions: 1051648,
                    permissions_new: "1051648"

                }
            })

            hasUpdate = true;
        }


        if(hasInGamerole == false){
            let InGameRole = message.guild.roles.create({
                data:{
                    name: 'In Game',
                    color: 0x1E8449,
                    permissions: 1051648,
                    permissions_new: "1051648"

                }
            })

            hasUpdate = true;
        }   

        if(hasEMrole == false){
            let Emrole = message.guild.roles.create({
                data:{
                    name: 'Emergency Call',
                    color: 0xA93226,
                    permissions: 3148800,
                    permissions_new: "3148800"

                }
            })

            hasUpdate = true;
        }

        if(hasGameHostrole == false){
            let leaderrole = message.guild.roles.create({
                data:{
                    name: 'Game Host',
                    color: 0xF1C40F,
                    permissions: 3148800,
                    permissions_new: "3148800"

                }
            })

            hasUpdate = true;
        }

        if(hasLobbyrole == false){
            let lobbyrole = message.guild.roles.create({
                data:{
                    name: 'In Lobby',
                    color: 0xE67E22,
                    permissions: 3148800,
                    permissions_new: "3148800"

                }
            })

            hasUpdate = true;
        }   

   


        if(hasUpdate == true){
            const done = new Discord.MessageEmbed()
                .setTitle('Init done')
                .addField('The initalisation is done now you can play games!','Have fun!')
                .setColor(0x2ECC71)
                .setFooter('version: ' + botConfig.vers);
            message.channel.send(done);


            const feedback = new Discord.MessageEmbed()
                .setTitle('Help Needed!')
                .addField('Better translations','My owner **MrBraadworst#8194** made me for this server and he is not very good in englisch so if you find some grammar mistakes please DM him!')
                .addField('Feedback', 'If you have some feedback you also can DM **MrBraadworst#8194**')
                .addField('Bugs', 'If you find any bugs please DM **MrBraadworst#8194**')
                .addField('Thank you everyone!', '@everyone')
                .setColor(0x2ECC71)
            message.channel.send(feedback);


        }
        else
        {
            const done = new Discord.MessageEmbed()
                .setTitle('Everything up to date!')
                .addField('Everything was up to date','Have fun!')
                .setColor(0x2ECC71)
                .setFooter('version: ' + botConfig.vers);
            message.channel.send(done);

        }
    }
    else{
        message.channel.send('you dont have permission to use that').then(msg => {
            msg.delete({ timeout: botConfig.delete_message_time })
          });;

    }
        




    }
}