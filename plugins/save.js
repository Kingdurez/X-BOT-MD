//CODING BY NOTNING ❤️‍🩹🫅🏻
const config = require('../config');
const { cmd, commands } = require('../command');
const fs = require('fs');
const path = require('path');

cmd({
    pattern: "save",
    react: "📁",
    alias: ["store"],
    desc: "Save and send back a media file (image, video, or audio).",
    category: "media",
    use: ".save <caption>",
    filename: __filename,
},
async (conn, mek, m, { quoted, q, reply }) => {
    try {
        if (!quoted) {
            return reply("❌ Reply to a media message (video, image, or audio) with the `.save` command.");
        }

        const messageType = quoted.mtype;
        let mediaType;

        // Determine the type of media
        if (/video/.test(messageType)) {
            mediaType = "video";
        } else if (/image/.test(messageType)) {
            mediaType = "image";
        } else if (/audio/.test(messageType)) {
            mediaType = "audio";
        } else {
            return reply("❌ Only video, image, or audio messages are supported.");
        }

        // Download and save the media file
        const mediaPath = await conn.downloadAndSaveMediaMessage(quoted);
        const filePath = path.resolve(mediaPath);

        // Send the saved media back
        const mediaMessage = {
            caption: q || '',
        }       

        mediaMessage[mediaType] = { url: `file://${filePath}` }
    
        await conn.sendMessage(m.sender, mediaMessage, { quoted: mek })
        await reply("✅ Successfully saved and sent the media file.")
    } catch (error) {
        console.error(error);
        reply("❌ Failed to save and send the media. Please try again.")
    }
   
});
cmd({
  'pattern': 'vv',
  'alias': ["viewonce", 'retrive'],
  'desc': "download viewOnce Message.",
  'category': "tools",
  'use': "<query>",
  'filename': __filename
}, async (_0x9034b9, _0x25fb23) => {
  try {
    var _0x1fd65b = _0x9034b9.reply_message && _0x9034b9.reply_message.viewOnce ? _0x9034b9.reply_message : false;
    if (!_0x1fd65b) {
      return _0x9034b9.reply("```Please Reply A ViewOnce Message```");
    }
    let _0x1bc847 = {
      'key': _0x1fd65b.key,
      'message': {
        'conversation': "```[VIEWONCE FOUND DOWNLOAD 100%]```"
      }
    };
    let _0x201e84 = await _0x9034b9.bot.downloadAndSaveMediaMessage(_0x1fd65b.msg);
    
    // Send the downloaded media to the user's DM
    await _0x9034b9.bot.sendMessage(_0x9034b9.user, {
      [_0x1fd65b.mtype2.split('Mes')[0x0]]: {
        'url': _0x201e84
      },
      'caption': _0x1fd65b.body
    }, {
      'quoted': _0x1bc847
    });
  } catch (_0x1a1295) {
    await message.error(_0x1a1295 + "\n\ncommand: vv", _0x1a1295);
  }
});
            
