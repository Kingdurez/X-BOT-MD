const axios = require('axios');
const { cmd } = require('../command');
cmd({
    pattern: "lyrics",
    desc: "Get a song from query",
    react: "🎶",
    category: "search",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try { 
        const args = q.split(' ');
        if (args.length < 2) return reply("❗ Please provide a song. Usage: .lyrics [song name] [artist]");

        const song = args[0];
        const artist = args.slice(1).join(' ');
        
        const url = `https://api.davidcyriltech.my.id/lyrics?t=${song}&a=${artist}`;  // API for random rizz
        const response = await axios.get(url);
        const lyrics = response.data;

        const message = `
  *X-BOT-MD LYRICS*

*TITLE* ${lyrics.title}
*ARTIST* ${lyrics.artist}

      ${lyrics.lyrics}


`;

        return reply(message);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while fetching lyrics. Please try again later🤕.");
    }
});
