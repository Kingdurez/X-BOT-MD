const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJFNEYvLzBiNzBhdUh2R2R1dmtsUndrWXRLVVY5V0pYVnBCa2xJRmRYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXlTSkhCcFlPY1pHRTM3N3hLUWJkRVlNZDV6bFpCNWNnbzRNZGRETFRYaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSnZEWXEwVFA2T1dJSUcvRGxCd21sejhKWnVRditReXFOTkp1UERiNmxZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuTWl0SUg3TmNoZlRNMzgyRWR3RExFTzlDbXhhODNDNUNZVldpR0U1R3drPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFJVmZ1Q25YUzMyaEorMVNmUHlhd2J6RjgySHh1YnRSa1c2S016YkdWWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1lWENoVDNDbC9peVdaT0RKOTdBL29LYW1sLzZUamdKNzlLbTFHRUFjMU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxxQ0ZDODJjanVYMENlOEo0UzlzdDFQdW1TLzZvbUg3Ris0TkhMemxWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXMyR2FuUmdPZE83dzBDZ1FlSjRhM0d4eU9SclNsS2k4dnRqeS9GdXpuTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InczSVpyK1o3cHpCeVV3aXk0NXF1QXZjVlRKQkx0ZUVydWdkdnhtUzBJalJlWFd2NEsxUVdoUHlUczl6ZWpYVy9wb1ZPK1RQaEIyeVdsVXNrMGtTdGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE3LCJhZHZTZWNyZXRLZXkiOiJlcVc1Q29Cb05IZEpseDM3NUpPSjBIZ1czbktwak5zMmhOb0VoT2piNzVnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNjEzNTQ4MDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0EyRjI4QUJCRjNDMjQzODU3NjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNjMxNjQ3OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNXYxYTR6OGhRV3U5UnFESmt5bjMwUSIsInBob25lSWQiOiIwMzQwM2FlYi0xMjhlLTQ2MjItOGVkNi1mN2UyMTE2MzBlZmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHFGclNRMjlrZytsaTU3Z1RiclFMV2dGakZNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVNeGptYXN6QVNPYmxpVkdaUkVsVnFyenh1QT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4R1dNWkdSNiIsIm1lIjp7ImlkIjoiMjM0ODE2MTM1NDgwMjo1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPcTNyUzBRcjZ6NHV3WVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSaHhBQlhWNFlDQUJSb1lkYUR6dlUySS9EQ3JjU01UQ2VidCtFV3hQM3cwPSIsImFjY291bnRTaWduYXR1cmUiOiJ5V1JQbUlNdFFCcVhsTTRFbjN5Zy9UcFI5cCtvOFladDZ1UFdpQjBJU1FLMm84KzlQcXY4RGR2eUFSUlBJTnpEUzdaVERsQXQ2Zm9STDJaVy8yeVZpUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT213eU5VckFWZmNRWW1zelhJNUlpa1p2NkpVd1JBNWVUelBEYjJ5Nm1pU0VLOEhGQkNOTmkxNVFQRE51TXMzSklDVVdqUEt5czg3b3JFRkJBZWoranc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTYxMzU0ODAyOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVljUUFWMWVHQWdBVWFHSFdnODcxTmlQd3dxM0VqRXdubTdmaEZzVDk4TiJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2MzE2NDc2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdoOCJ9",
    CAPTION: process.env.CAPTION || "> ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "private",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "true",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/rzPIk3t.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "ʜɪ ᴛʜᴇʀᴇ, ɪ'ᴍ ᴀᴄᴛɪᴠᴇ ʀɪɢʜᴛ ɴᴏᴡ, ᴀɴʏ ɴᴇᴡs?",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    READ_CMD: process.env.READ_CMD || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "⁠➜x-ʙᴏᴛ-ᴍᴅ",
    STATUS_REPLY: process.env.STATUS_REPLY || "`sᴛᴀᴛᴜs sᴜᴄᴄᴇssғᴜʟʟʏ ᴠɪᴇᴡᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
