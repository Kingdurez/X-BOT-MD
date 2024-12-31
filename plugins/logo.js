const axios = require('axios');
const { fetchJson } = require('../lib/functions')
const { cmd } = require('../command');

cmd({
    pattern: "bpink",
    alias: ["blackpink"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "bpink2",
    alias: ["sblackpink"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "gsilver",
    alias: ["glossysilver"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "naruto",
    alias: ["narutospn"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "glitch",
    alias: ["glitchtext"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "digitalg",
    alias: ["digitalglitch"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "3dcomic",
    alias: ["comic3d"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "neonlight",
    alias: ["neonl"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "fbear",
    alias: ["freebear"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-bear-logo-maker-online-673.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "devwing",
    alias: ["devilwings"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "sonline",
    alias: ["statonlione"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-typography-status-online-with-impressive-leaves-357.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "wgrass",
    alias: ["wetgrass"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-on-wet-glass-online-589.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "draballs",
    alias: ["dragonballs"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "nolight",
    alias: ["neonlight2"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "fglass",
    alias: ["froggyglass"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "nl",
    alias: ["nllg"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "castle",
    alias: ["3dcastle"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-3d-castle-pop-out-mobile-photo-effect-786.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "frozen",
    alias: ["fchristmas"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "ballon",
    alias: ["foilballon"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "tpavement",
    alias: ["typepavement"],
    react: '👽',
    desc: "Download logo.",
    category: "logo",
    use: '.cmd <name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get(`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html&name=${q}`)
let wm = `
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ..*`
await conn.sendMessage(from, { image: { url: res.data.result.download_url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
