const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')


cmd({
    pattern: "bible",
    react: "🙏🏾",
    desc: "get bible verses.",
    category: "fun",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://bible-api.com/${q}`)
return reply(` 
 X-BOT-MD BIBLE VERSE 
 
 READIDNG= ${data.text}
 REFERENCE= ${data.reference} 
 > ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅx`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})