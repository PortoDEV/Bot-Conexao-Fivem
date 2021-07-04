const { MessageEmbed } = require("discord.js");

const disbut = require('discord-buttons');

module.exports = {
    config: {
        name: "connect",
        description: "...",
        usage: "...",
        category: "Main",
        accessableby: "Todos",
        aliases: [], // To add custom aliases just type ["alias1", "alias2"].
    },
    run: async (client, message, args) => {
        const embed1 = new MessageEmbed()
        .setDescription('****')
        .setColor("")
        .setThumbnail("")

        const button1 = new disbut.MessageButton()
        .setLabel('Fivem')
        .setStyle('url')
        .setURL("") 

        message.channel.send({
            buttons:[
                button1
            ],
            embed: embed1
        });

        message.delete()
    }
}
