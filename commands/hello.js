module.exports = {
    name: 'hello' ,
    description: "simple hello command!",
    execute(message,args){
        message.channel.send('youre sus');
    }
}