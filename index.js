const fs = require('fs');
const Discord = require('discord.js');
const { TOKEN } = require("./config.json");
const Client = new Discord.Client({
    intents: ["GUILD", "GUILD_MESSAGES"]
});

// prefix a 
const prefix = "¡";



// connections
Client.on('ready', () => {
    console.log("Murkness is Online")

    // statut 
    Client.user.setActivity("Protection Yuzu", {
        type: "PLAYING"
    })
    

});


//texte

Client.on("message",message => {
    if(message.author.bot) return;
  
    //Murkness
    if(message.content == prefix + "Murkness"){
        message.reply("Oui qu'y a t'il donc??");
        
    }
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //murkness
    if(message.content == prefix + "murkness"){
        message.reply("m'as tu demandé ??");
        
    }
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //comment vas tu ?
    if(message.content == prefix + "comment vas tu ?"){
        message.reply("Merci c'est gentil de ta part de me le demander, tout est ok");
        
    }
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //quel est ta commande de préfix ?
    if(message.content == prefix + "quel est ta commande de préfix ?"){
        message.reply("c'est alt + 173");
        
    }
});


Client.on("message",message => {
    if(message.author.bot) return;
  
    //préfix
    if(message.content == prefix + "préfix"){
        message.reply("oui c'est alt + 173");
        
    }
});

Client.on("message",message => {
    if(message.author.bot) return;
  
    //prefix
    if(message.content == prefix + "prefix"){
        message.reply("alt + 173");
        
    }
});




//Suppression de messages

Client.on("message",message => {
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if(message.content.startsWith(prefix + "clear")){
            let args = message.content.split(" ");
            
            if(args[1] == undefined){
                message.reply("Nombre de message non ou mal defini.");
  
            }
             else {
                let number = parseInt(args[1]);
  
                if(isNaN(number)){
                   message.reply("Nombre de message non ou mal defini.");
                    
                }
                else {
                   message.channel.bulkDelete(number).then(messages => {
                        console.log("Supression de" + messages.size + "messages réussi !")
  
                   }).catch(err =>{
                       console.log("Erreur de clear : " + err);
                   });
                }
  
            }
        }
  
    }
    
});


Client.login(process.env.TOKEN);