const Discord = require('discord.js');
const botConfig = require('./botconfig.json');
const theToken = require('./token.json'); // alleen nodig voor testen
const client = new Discord.Client();

const prefix ='-';

const fs = require('fs');
const { cpuUsage } = require('process');
const hostgame = require('./commands/hostgame');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () => {
    console.log('TheImposter is online V' + botConfig.vers)
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot){
        if(message.channel.name === 'create-a-game' && !message.author.bot){
            console.log('deleted a message in create a game')
            message.delete({ timeout: 500, reason: 'Delete command.' })
        }


        return;
    } 
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command)
    {
        case 'hostgame':
            client.commands.get('hostgame').execute(message,args,client);

        break;

        case 'creategame':
            client.commands.get('creategame').execute(message,args,client);

        break;

        case 'init':
            client.commands.get('init').execute(message,args,client); 
            message.delete({ timeout: 500, reason: 'Delete command.' })

        break;

        case 'end':
            client.commands.get('end').execute(message,args,client); 

        break;

        case 'death':
            client.commands.get('death').execute(message,args,client);
            message.delete({ timeout: 500, reason: 'Delete command.' })

        break;

        case 'unmute':
            client.commands.get('unmute').execute(message,args,client);
            message.delete({ timeout: 500, reason: 'Delete command.' })

        break;

        case 'play':
            client.commands.get('play').execute(message,args,client);
            message.delete({ timeout: 500, reason: 'Delete command.' })

        break;

        case 'em':
            client.commands.get('em').execute(message,args,client);
            message.delete({ timeout: 500, reason: 'Delete command.' })

        break;

        case 'lobby':
            client.commands.get('lobby').execute(message,args,client);
            message.delete({ timeout: 500, reason: 'Delete command.' })

        break;
        
        case 'update':
            client.commands.get('update').execute(message,args,client);
            message.delete({ timeout: 500, reason: 'Delete command.' })

        break;

        case 'help':

        break;

    }




    
   

    if(message.channel.name === 'create-a-game' && !message.author.bot){
        console.log('deleted a message in create a game')
        message.delete({ timeout: 500, reason: 'Delete command.' })
    }

    


});


client.login(theToken.token);