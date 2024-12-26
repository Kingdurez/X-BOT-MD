const config = require('../config');
const { cmd, commands } = require('../command');
const fs = require('fs');
const path = require('path');

cmd(
  {
    pattern: "save",
    desc: "Save Message to log number",
    category: "owner",
    filename: __filename,
  },
  async (cld, _, { cmdName }) => {
    try {
      let reply = cld.reply_message;
      if (!reply) {
        return await cld.send("*Uhh Please, reply to to a Message*");
      }
      let sent = await cld.bot.forwardOrBroadCast(cld.user, reply);
    } catch (err) {
      await cld.error(err + "\n\ncommand : save", err);
    }
  }
);
