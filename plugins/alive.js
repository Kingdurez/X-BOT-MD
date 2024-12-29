const config = require('../config');
const {
  cmd,
  commands
} = require('../command');
cmd({
  'pattern': "alive",
  'react': '🌐',
  'desc': "Check bot online or no.",
  'category': "other",
  'filename': __filename
}, async (_0x19d98b, _0x5aa4b2, _0x44e2ae, {
  from: _0xc4ffe9,
  quoted: _0x24fa1d,
  body: _0x509daf,
  isCmd: _0x2066b7,
  command: _0x334314,
  args: _0x106b78,
  q: _0x37752d,
  isGroup: _0x2738fa,
  sender: _0x3fcfd5,
  senderNumber: _0x37772c,
  botNumber2: _0x21e30c,
  botNumber: _0x23cadb,
  pushname: _0x112edf,
  isMe: _0x4ddc23,
  isOwner: _0x4d0552,
  groupMetadata: _0x2d14d4,
  groupName: _0x434739,
  participants: _0x2d2495,
  groupAdmins: _0x4b11bb,
  isBotAdmins: _0x1c9a90,
  isAdmins: _0x3b6b85,
  reply: _0x1f478f
}) => {
  try {
    await _0x19d98b.sendMessage(_0xc4ffe9, {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': config.ALIVE_MSG,
      'contextInfo': {
        'mentionedJid': [_0x44e2ae.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363348038810906@newsletter",
          'newsletterName': "X-BOT-MD",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x5aa4b2
    });
    await _0x19d98b.sendMessage(_0xc4ffe9, {
      'audio': {
        'url': "https://raw.githubusercontent.com/Mek-d1/X-DATABASE/refs/heads/main/VOICE-DATA/xmdbot.mp3"
      },
      'mimetype': "audio/mpeg",
      'ptt': true,
      'contextInfo': {
        'mentionedJid': [_0x44e2ae.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363348038810906@newsletter",
          'newsletterName': "X-BOT-MD",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x5aa4b2
    });
  } catch (_0x4aec5f) {
    console.log(_0x4aec5f);
    _0x1f478f('' + _0x4aec5f);
  }
});
