

const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "gpt",
    alias: ["chatgpt"], 
    react: "📑",
    desc: "ai chat.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`)
return reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
cmd({
    pattern: "jeeves",
    react: "🗽",
    desc: "chat with jeeves ai.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://bk9.fun/ai/jeeves-chat2?q=${q}`)
return reply(`${data.BK9}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "aayo",
    react: "🆒",
    desc: "ask aayo ai about any anime.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://bk9.fun/ai/Aoyo?q=${q}`)
return reply(`${data.BK9}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "llama",
    react: "🤖",
    desc: "chat with llama ai.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://bk9.fun/ai/llama?q=${q}`)
return reply(`${data.BK9}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
cmd({
    pattern: "gpt4",
    alias: ["gptbk"], 
    react: "🤓",
    desc: "ai chat.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://www.dark-yasiya-api.site/ai/chatgpt?q=${q}`)
return reply(`${data.result}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})




