const {
  cmd
} = require('../command');
const config = require('../config');
cmd({
  'on': "body"
}, async (_0x445c96, _0x100e7d, _0x4da018, {
  from: _0x264836,
  body: _0x296031,
  isGroup: _0x5ddcf9,
  isAdmins: _0x1b0acd,
  isBotAdmins: _0x268c45,
  reply: _0x57dfb1,
  sender: _0x15a900
}) => {
  try {
    const _0x3ee4f1 = ["wtf", "mia", "fool", "mumu", "idiot", "kill", "pussy", "anjay", "fuck", "sex", "huththa", "pakaya", "prick", "hutto", "kariya", "ogun", "hukapan", "preeq", "hutto", "xvdl", "hutto", "Hukapamm", "dick"];
    if (!_0x5ddcf9 || _0x1b0acd || !_0x268c45) {
      return;
    }
    const _0x5f19ea = _0x296031.toLowerCase();
    const _0x4227a0 = _0x3ee4f1.some(_0x3c7f6e => _0x5f19ea.includes(_0x3c7f6e));
    if (_0x4227a0 & config.ANTI_BAD === "true") {
      await _0x445c96.sendMessage(_0x264836, {
        'delete': _0x100e7d.key
      }, {
        'quoted': _0x100e7d
      });
      await _0x445c96.sendMessage(_0x264836, {
        'text': "⚠️BAD WORDS NOT ALLOWED⚠️ "
      }, {
        'quoted': _0x100e7d
      });
      await _0x445c96.groupParticipantsUpdate(_0x264836, [_0x15a900], "remove");
    }
  } catch (_0x320258) {
    console.error(_0x320258);
    _0x57dfb1("An error occurred while processing the message.");
  }
});
const linkPatterns = [/https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi, /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi, /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi, /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi, /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi, /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi, /https?:\/\/ngl\/\S+/gi, /https?:\/\/(?:www\.)?discord\.com\/\S+/gi, /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi, /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi, /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi, /https?:\/\/(?:www\.)?medium\.com\/\S+/gi];
cmd({
  'on': "body"
}, async (_0x102068, _0x15136d, _0x48cf8e, {
  from: _0x316101,
  body: _0x3f7a27,
  sender: _0x57b976,
  isGroup: _0x5905f8,
  isAdmins: _0x184a88,
  isBotAdmins: _0x35e6fa,
  reply: _0x4d9c28
}) => {
  try {
    if (!_0x5905f8 || _0x184a88 || !_0x35e6fa) {
      return;
    }
    const _0x4b03d7 = linkPatterns.some(_0x5e9f28 => _0x5e9f28.test(_0x3f7a27));
    if (_0x4b03d7 && config.ANTI_LINK === "true") {
      await _0x102068.sendMessage(_0x316101, {
        'delete': _0x15136d.key
      }, {
        'quoted': _0x15136d
      });
      await _0x102068.sendMessage(_0x316101, {
        'text': "⚠️ Links are not allowed in this group.\n@" + _0x57b976.split('@')[0x0] + " has been *KICKED*. 🚫",
        'mentions': [_0x57b976]
      }, {
        'quoted': _0x15136d
      });
      await _0x102068.groupParticipantsUpdate(_0x316101, [_0x57b976], "remove");
    }
  } catch (_0x1e7008) {
    console.error(_0x1e7008);
    _0x4d9c28("An error occurred while processing the message.");
  }
});
