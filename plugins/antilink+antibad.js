const {
  cmd
} = require("../command");
const config = require('../config');
cmd({
  'on': "body"
}, async (c, d, e, {
  from: f,
  body: g,
  isGroup: h,
  isAdmins: i,
  isBotAdmins: j,
  reply: k,
  sender: l
}) => {
  try {
    const o = ["wtf", "mia", "පොන්නයා", "හැමිනෙනවා", "කැරියා", "හුත්තා", "හුත්තා", "පකයා", "fuck", "sex", "huththa", "pakaya", "ponnaya", "hutto", 'kariya', "pakaya", "hukapan", "hukanna", "hutto", 'xvdl', "hutto", 'Hukapamm', 'lol'];
    if (!h || i || !j) {
      return;
    }
    const p = g.toLowerCase();
    const q = o.some(r => p.includes(r));
    if (q & config.ANTI_BAD === "true") {
      await c.sendMessage(f, {
        'delete': d.key
      }, {
        'quoted': d
      });
      await c.sendMessage(f, {
        'text': "⚠️BAD WORDS NOT ALLOWED⚠️ "
      }, {
        'quoted': d
      });
      await c.groupParticipantsUpdate(f, [l], "remove");
    }
  } catch (r) {
    console.error(r);
    k("An error occurred while processing the message.");
  }
});
const linkPatterns = [/https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi, /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi, /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi, /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi, /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi, /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi, /https?:\/\/ngl\/\S+/gi, /https?:\/\/(?:www\.)?discord\.com\/\S+/gi, /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi, /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi, /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi, /https?:\/\/(?:www\.)?medium\.com\/\S+/gi];
cmd({
  'on': "body"
}, async (c, d, e, {
  from: f,
  body: g,
  sender: h,
  isGroup: i,
  isAdmins: j,
  isBotAdmins: k,
  reply: l
}) => {
  try {
    if (!i || j || !k) {
      return;
    }
    const o = linkPatterns.some(p => p.test(g));
    if (o && config.ANTI_LINK === "true") {
      await c.sendMessage(f, {
        'delete': d.key
      }, {
        'quoted': d
      });
      await c.sendMessage(f, {
        'text': "⚠️ Links are not allowed in this group.\n@" + h.split('@')[0] + " has been removed. 🚫",
        'mentions': [h]
      }, {
        'quoted': d
      });
      await c.groupParticipantsUpdate(f, [h], "remove");
    }
  } catch (p) {
    console.error(p);
    l("An error occurred while processing the message.");
  }
});
