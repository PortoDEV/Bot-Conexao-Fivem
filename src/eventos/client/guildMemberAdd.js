const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-br');

module.exports = async (bot, member) => {
	const canal = member.guild.channels.cache.get('774310708162723880');

    const guild = bot.guilds.cache.get("755439766228435369");

    const emoji = member.guild.emojis.cache.find(emoji => emoji.name === "nikecolombia");

    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`${emoji} Boas-vindas ${emoji}`)
        .setImage(`https://cdn.discordapp.com/icons/755439766228435369/a_cd6cc5cb0d913718da5d900907cc8335.gif?size=2048`)
        .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**.`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setFooter("❤ Gamezada")
        .setTimestamp();
    canal.send(embed)


}