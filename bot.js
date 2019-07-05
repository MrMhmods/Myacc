const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});




client.login('mfa.O7Uw9TCdr0mqM3UP1B3iF-mmo_M4Vx3u5b-Gj9WSnVuPCpQsv0RYsxPv39hERYeThk5XPop_aY2HJS1zG6vL');
