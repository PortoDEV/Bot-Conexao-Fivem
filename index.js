const {
    Client,
    Collection
} = require('discord.js');

const bot = new Client();
const config = require('./config.json');
const disbut = require('discord-buttons')(bot);
["commands", "aliases"].forEach(x => bot[x] = new Collection()); 
["comandos", "eventos"].forEach(x => require(`./src/handlers/${x}`)(bot));

bot.login(config.token);