const moment = require('moment-timezone');
const { cmd, commands } = require('../command');
const config = require('../config');

cmd({
  'pattern': 'vv2',
  'alias': ["viewonce", 'retrive'],
  'desc': "download viewOnce Message.",
  'category': "other",
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
