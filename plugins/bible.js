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
 *X-BOT-MD BIBLE VERSE* 
 
 
 *REFERENCE*❤️ ${data.reference}
 *READIDNG*💐 ${data.text}   

 
 > ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅx`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "quran",
    react: "🤍",
    desc: "get quran verses.",
    category: "fun",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://quranapi.pages.dev/api/${q}.json`)
return reply(` 
 *X-BOT-MD QURAN* 
 
 
 *SURAH-NAME*❤️  ${data.surahName}
 
 *SURAH-NAME-EN*💐  ${data.surahNameTranslation} 
 
 *SURAH-NUMBER*❤️  ${data.surahNo}

 *AYAH-NUMBER*❤️  ${data.ayahNo}

 *ENGLISH-TRT*❤️  ${data.english}

 *BENGALI-TRT*❤️  ${data.bengali}

 *ARABIC-TRT*❤️  ${data.arabic1}

 
 > ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅx`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
