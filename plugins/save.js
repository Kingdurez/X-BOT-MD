const config = require('../config');
const { cmd, commands } = require('../command');
const fs = require('fs');
const path = require('path');

cmd({
  'pattern': 'save',
  'desc': "Save Message to log number",
  'category': "other",
  'filename': __filename
}, async (_0x23a729, _0x5ad999, { cmdName: _0x2cb44f }) => {
    try {
      let _0x48ef43 = _0x23a729.reply_message;
      if (!_0x48ef43) {
        return await _0x23a729.send("*Uhh Please, reply to to a Message*");
      }
      let _0x114513 = await _0x23a729.bot.forwardOrBroadCast(
        _0x23a729.user,
        _0x48ef43
      );
    } catch (_0x43530a) {
      await _0x23a729.error(_0x43530a + "\n\ncommand : save", _0x43530a);
    }
  }
);
