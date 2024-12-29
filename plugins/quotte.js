const axios = require('axios');
const { fetchJson } = require('../lib/functions')
const { cmd } = require('../command');

cmd({
    pattern: "quote",
    desc: "Get a random inspiring quote.",
    category: "fun",
    react: "💬",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const response = await axios.get('https://favqs.com/api/qotd');
        const quote = response.data.quote;
        const message = `
💬 "${quote.body}"
- ${quote.author}
*QUOTES BY X-BOT MD*
        `;
        return reply(message);
    } catch (e) {
        console.error("Error fetching quote:", e);
        reply("¢συℓ∂ ησт ƒєт¢н α qυσтє. ρℓєαѕє тяу αgαιη ℓαтєя.");
    }
});
cmd({
    pattern: "tiny",
    alias: ["short"], 
    react: "😐",
    desc: "to shorten Links",
    category: "random",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://tinyurl.com/api-create.php?url=${q}`)
return reply(` ~here's your shortened Link~ *${data}*`)
}catch(e){
console.log(e)
reply(`${e}`)
}
});
