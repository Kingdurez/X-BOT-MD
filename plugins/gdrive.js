
const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

// FETCH API URL
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();


const yourName = "*> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅx*";
) 

//gdrive(google drive) dl
cmd({
    pattern: "gdrive2",
    alias: ["ggdrive"],
    desc: "download gdrive files",
    category: "download",
    react: "📩",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me gdrive url")
        //fetch data from api  
        let data = await fetchJson(`https://bk9.fun/download/gdrive?url=${q}`)
        reply("*PLEASE WAIT ☞x-ʙᴏᴛ-ᴍᴅ☜⁠ *")
        await conn.sendMessage(from, { document: { url: data.BK9.downloadUrl }, fileName: data.BK9.fileName, mimetype: data.BK9.mimetype, caption: `${data.BK9.fileName}\n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
