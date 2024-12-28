const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

// FETCH API URL
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://bk9.fun/download`)
    baseUrl = baseUrlGet.api
})();


const yourName = "*x-ʙᴏᴛ-ᴍᴅ*";

//twitter dl (x)
cmd({
    pattern: "twitdl",
    alias: ["twdl"],
    desc: "download tw videos",
    category: "download",
    react: "📩",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me twitter url")
        //fetch data from api  
        let data = await fetchJson(`https://bk9.fun/download/twitter?url=${q}`)
        reply("*X-BOT-MD TWITTER VIDEO DOWNLOADING...*")
        //send video hd
        await conn.sendMessage(from, { video: { url: data.data.BK9.HD }, mimetype: "video/mp4", caption: `- HD\n\n ${yourName}` }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//gdrive(google drive) dl
cmd({
    pattern: "alldl",
    alias: ["allsocial"],
    desc: "download social  media files",
    category: "download",
    react: "🚀",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me a url")
        //fetch data from api  
        let data = await fetchJson(`https://bk9.fun/download/alldownload?url=${q}`)
        reply("*X-BOT-MD ALL SOCIAL  DOWNLOADING...🚀*")
        await conn.sendMessage(from, { video: { url: data.data.BK9.high }, mimetype: "video/mp4", caption: `- HD\n\n ${yourName}` }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
