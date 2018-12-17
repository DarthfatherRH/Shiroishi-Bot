const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true}); // botnya tidak akan bisa mention @everyone
const prefix = '!';

bot.on("ready", async () => {
	console.log(`${bot.user.username} Saya siap melayani!`);
	bot.user.setActivity("Sabar cuk lagi coding", {type: "PLAYING"});	
});

bot.on("message", async message => {
	if (message.author.bot) return; // bot kita tidak akan menjawab jika command dikirim oleh bot lain
	if (message.channel.type === 'dm') return; // bot kita tidak akan menjawab jika kita menggunakan command di DM atau PM

	let prefix = config.prefix;
	let messageArray = message.content.split(" "); // command bisa disisipkan spasi
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

	if (!massage.startWith(prefix)) return;

	if (cmd === `${prefix}halo`) { // bukan ping tapi halo :U
		message.channel.send("Halo juga");
	}

	if (cmd === `${prefix}botinfo`) {
		let bicon = bot.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
		let botembed = new Discord.RichEmbed()
		.setAuthor("Bot information")
		.setColor("RANDOM") // kalian juga bisa menggunakan kode HEX, cari di google
		.setThumbnail(bicon) // thumbnail dari avatar bot kalian tadi
		.addField("Bot name", bot.user.username)
		.addField("Created", bot.user.createdAt);

		message.channel.send(botembed); // untuk mengirim embed yang sudah dibuat diatas..
	}

	if (cmd === `${prefix}serverinfo`) {
		let sicon = message.guild.iconURL; // kalau server gunakan icon bukan displayAvatar
		let serverembed = new Discord.RichEmbed()
		.setAuthor("Server information")
		.setColor("RANDOM")
		.setThumbnail(sicon)
		.addField("Server name", message.guild.name) // nama dari guildnya
		.addField("Created", message.guild.createdAt) // tanggal dibuat guildnya
		.addField("You joined", message.member.joinedAt) // tanggal kamu join guild
		.addField("Owner of this server", message.guild.owner); // owner dari guild

		message.channel.send(serverembed);
	}

	if (cmd === `${prefix}police`) {
		message.channel.send("")
	}
});

client.login(process.env.NTI0MjMyNTcwNDQ0MTg1NjAw.DvlsaQ.S0i0zRrDA-Gdoi-pb21vZGF4HI8);
