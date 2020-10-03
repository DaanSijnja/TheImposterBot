const Discord = require('discord.js');
const botConfig = require('./botconfig.json');

const client = new Discord.Client();

const prefix ='-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () => {
    console.log('TheImposter is online')
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

    if(command === 'hello'){
        client.commands.get('hello').execute(message,args,client);
        
    } 
    else  if(command === 'hostgame'){

        client.commands.get('hostgame').execute(message,args,client);
        
    } 
    else  if(command === 'creategame'){

        client.commands.get('creategame').execute(message,args,client);
        
    } 
    else if(command === 'init'){

        client.commands.get('init').execute(message,args,client); 
        message.delete({ timeout: 500, reason: 'Delete command.' })
    } 
    else if(command === 'end'){

        client.commands.get('end').execute(message,args,client); 
    } 
    else if(command === 'death'){
        
        client.commands.get('death').execute(message,args,client);
        message.delete({ timeout: 500, reason: 'Delete command.' })
    }
    else if(command === 'unmute'){
        
        client.commands.get('unmute').execute(message,args,client);
        message.delete({ timeout: 500, reason: 'Delete command.' })
    }
    else if(command === 'play') {

        client.commands.get('play').execute(message,args,client);
        message.delete({ timeout: 500, reason: 'Delete command.' })
    }  
    else if(command === 'em'){

        client.commands.get('em').execute(message,args,client);
        message.delete({ timeout: 500, reason: 'Delete command.' })
    }
    else if(command === 'lobby'){

        client.commands.get('lobby').execute(message,args,client);
        message.delete({ timeout: 500, reason: 'Delete command.' })
    }

    if(message.channel.name === 'create-a-game' && !message.author.bot){
        console.log('deleted a message in create a game')
        message.delete({ timeout: 500, reason: 'Delete command.' })
    }

    


});


client.login(botConfig.token);