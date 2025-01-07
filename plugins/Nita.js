const axios = require('axios');
const { cmd } = require('../command');

cmd(
  {
    pattern: "aza",
    desc: "Send account details",
    type: "owner",
    react: "💰",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://i.imgur.com/rzPIk3t.jpeg",
        { caption: "*Here's my account details, 9133354644 (opay) David promise, Send screenshots after payment *" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: aza`, e, false);
    }
  }
);

