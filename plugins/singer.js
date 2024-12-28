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
let data = await fetchJson(`https://itzpire.com/search/lyrics?query=${encodeURIComponent(q)}`)
return reply(`${data.data.lyrics}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
