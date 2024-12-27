const config = require('../config')
const fetch = require('node-fetch')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')


cmd({
    pattern: "lyrics",
    react: "🎶",
    desc: "get a lyrics from search query.",
    category: "search",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) {
        return await m.send("*_Please provide a song name!_*");
      }

      const apiUrl = `https://itzpire.com/search/lyrics?query=${encodeURIComponent(q)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        return await m.send(
          `*_Error: ${response.status} ${response.statusText}_*`
        );
      }

      const data = await response.json();

      if (data.status !== "success") {
        return await m.send("*_An error occurred while fetching the data._*");
      }

      const { artist, lyrics, title } = data.data;

      const lyricsMessage =`
*Song:* ${title}
*Artist:* ${artist}

${lyrics}
`;

      await m.send(lyricsMessage);
    } catch (e) {
      await m.error(`${e}\n\ncommand: lyrics`, e);
    }
  }
);
