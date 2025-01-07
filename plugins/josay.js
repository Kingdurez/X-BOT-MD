const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "aza",
    alias: ["account"],
    react: '💲',
    desc: "show account number .",
    category: "owner",
    use: '.aza',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = "https://i.imgur.com/rzPIk3t.jpeg"
let wm = ` 9133354644, David promise, (Opay), ~send ss after payment~

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅx*`
await conn.sendMessage(from, { image: { url: res }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

