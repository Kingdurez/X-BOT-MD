const config = require('../config')
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
let data = await fetchJson(`https://itzpire.com/search/lyrics?query=${q}`)
return reply(` 
 X-BOT-MD LYRICS FINDER 
 
 *STATUS* ${data.status}
 *TITLE* ${data.data.title} 
        *SONG* 
      ${data.data.lyrics}
      
  *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅx*`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
