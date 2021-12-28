const fs = require('fs');
const Discord = require('discord.js');
const { TOKEN } = require("./config.json");
const Client = new Discord.Client({
    intents: ["GUILD", "GUILD_MESSAGES"]
});

// prefix a changer
const prefix = "¡";

// connections
Client.on('ready', () => {
    console.log("Murkness is Online")

    // statut a changer
    Client.user.setActivity("Protect Nawiss", {
        type: "PLAYING"
    })
    

});


// marque tes futurs command a partr d'ici





Client.login(TOKEN)