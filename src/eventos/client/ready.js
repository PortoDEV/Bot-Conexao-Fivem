module.exports = async (bot, ready) => {
  console.log(`Comandos e eventos ligados! ✅`);
  console.log(`Bot foi iniciado com sucesso! ✅`);
  
  const status = [
    "online",
    "dnd",
    "idle"
  ]

  const atividades = [
    [`discord.gg/blessedrp`, `WATCHING`],
    [`Dev By porto#0001`, "PLAYING"]
  ]

  setInterval(async () => {
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
    await bot.user.setActivity(atividades[i][0], {
      type: atividades[i][1]
    });
  }, 15000)

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
    await bot.user.setStatus(status[b])
  }, 20000)

}  





