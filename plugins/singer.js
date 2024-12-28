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
        const url = `https://itzpire.com/search/lyrics?query=${q}`;  // API for random rizz
        const response = await axios.get(url);
        const lyrics = response.data.data;

        const message = `
  *X-BOT-MD LYRICS*

${lyrics.lyrics}


`;

        return reply(message);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while fetching lyrics. Please try again later🤕.");
    }
});
