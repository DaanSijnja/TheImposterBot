const Discord = require("discord.js");
const botConfig = require('../botconfig.json');





module.exports = {
    name: 'timepoll' ,
    description: "simple hello command!",
    execute(message,args,client){
       

        const info = new Discord.MessageEmbed() 
        .setTitle('**Time Poll**')
        .addField('Which times you are goining to play?','React to give your vote (you can vote on multiple Times)')
        .setColor(0x27AE60)

        console.log(args)

        message.channel.send(info).then(msg => {
           
            
            
            
            
            for(let i = 0; i < args.length; i++){

                console.log(args[i])
                switch(args[i]){

                    case "1":
                        msg.react('🕐')

                    break;

                    case "2":
                        msg.react('🕑')

                    break;

                    case "3":
                        msg.react('🕒')

                    break;

                    case "4":
                        msg.react('🕓')

                    break;
                    
                    case "5":
                        msg.react('🕔')

                    break;

                    case "6":
                        msg.react('🕕')

                    break;

                    case "6":
                        msg.react('🕕')

                    break;

                    case "7":
                        msg.react('🕖')

                    break;

                    case "8":
                        msg.react('🕗')

                    break;

                    case "9":
                        msg.react('🕘')

                    break;

                    case "10":
                        msg.react('🕙')

                    break;

                    case "11":
                        msg.react('🕚')

                    break;

                    case "12":
                        msg.react('🕛')

                    break;



                }





            }
            

          });




    }
}
