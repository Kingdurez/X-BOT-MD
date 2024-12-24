const {cmd , commands} = require('../command')

cmd({
    pattern: "support",
    desc: "support bot",
    category: "main",
    react: "💖",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*
          

*X-BOT-MD Support Channel🚀*

*Youtube Channel Link:* https://www.youtube.com/@Mek-d1 

*Github Profile Link:* https://github.com/Mek-d1 

*Whatsapp Channel Link:* https://whatsapp.com/channel/0029VarIiQL5a24AU5ZCVV0G

*Channel newsletter jid*: 120363348038810906@newsletter 

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅx*
`
await conn.sendMessage(from,{image:{url: `https://i.imgur.com/rzPIk3t.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
