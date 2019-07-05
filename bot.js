const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('+') 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '+test') {
    msg.reply(':thumbsup: GG');
  }
});





var id = ['526702104849678340'] //تذكر إذا كنت تبي تضيف شخص معاك حط فاصله وبعدين العلامه '
var initcmd = '+'
const developers = id
const adminprefix = initcmd;
client.on('message', message => {
    var argresult = message.content.split(' ').slice(2).join(" ")
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'vip ply')) {
    if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'vip wat')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'vip lis')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'vip stream')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

    client.user.setGame(argresult, "https://www.twitch.tv/fadi_games2");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'vip username')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'vip avatar')) {
      if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});



 
client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix+"top-servers")) {
        const top = client.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()
     let tl = "";
      for (let i=0;i<=25;i++) {
          if (!top[i]) continue;
         tl += i+" - "+top[i].name+" : "+top[i].memberCount+"\n"
      }
      message.channel.send(tl)
    }
});







client.on("message", message => { //ツMHMODS'$'ᵀᴹ#0001 

  if(message.content.toLowerCase().includes("giveaway")) { //ツMHMODS'$'ᵀᴹ#0001 

    if(message.author.id == "526702104849678340" || message.author.id == "294882584201003009") { //ツMHMODS'$'ᵀᴹ#0001 

      message.react("🎉") //ツMHMODS'$'ᵀᴹ#0001 

    } //ツMHMODS'$'ᵀᴹ#0001 

  } //ツMHMODS'$'ᵀᴹ#0001 

}) //ツMHMODS'$'ᵀᴹ#0001 





client.on('message', message => { 
    const mm = message.mentions.members.first() || message.member;
    if(message.content.startsWith(prefix + "avatar")){
        const embed = new Discord.RichEmbed()
        .setAuthor(mm.user.tag, mm.user.avatarURL)
        .setTitle("Avatar Link")
        .setURL(mm.user.avatarURL)
        .setImage(mm.user.avatarURL)
        .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed);
    }
});







client.on('message', message => {

  const aa = message.content.split(" ").slice(1).join(" ");

  if(message.content.startsWith(prefix + "skin")){

    if(!aa) return message.reply(`❌  -  **${prefix}skin <name>**`);

    var ss = new Discord.RichEmbed()

    .setTitle(`${aa}'s Skin!`)

    .setURL(`https://minotar.net/armor/body/${aa}/100.png`)

    .setThumbnail(`https://minotar.net/avatar/${aa}`)

    .setImage(`https://minotar.net/armor/body/${aa}/100.png`)

    .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)

    message.channel.send(ss);

  }

});







client.on('message', message => {

  if(message.content === prefix + "user"){

    var embed = new Discord.RichEmbed()

    .setTitle(message.author.tag, message.author.avatarURL)

    .addField(`User`, message.author.username)

    .addField(`Discrim`,`#`+ message.author.discriminator)

    .addField(`Name Color Role`, message.member.colorRole)

    .addField(`Game`,message.author.presence.game ||"Idle.")

    .addField(`Status`,message.author.presence.status)

    message.channel.send(embed);

  }

});












client.login('mfa.O7Uw9TCdr0mqM3UP1B3iF-mmo_M4Vx3u5b-Gj9WSnVuPCpQsv0RYsxPv39hERYeThk5XPop_aY2HJS1zG6vL');
