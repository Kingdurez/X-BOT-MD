const axios = require('axios');
const fetch = require('node-fetch');
const { cmd } = require('../command');

cmd(
  {
    pattern: "bible",
    desc: "Get a specific Bible verse based on user query.",
    category: "fun",
    filename: __filename,
  },
  async (m) => {
    try {
      // Extract the query from the message
      const query = m.text.split(' ').slice(1).join(' ');
      if (!query) {
        return await m.send("Please provide a Bible verse reference, e.g., `.bible3 psalm 37:4`.");
      }

      const apiUrl = `https://bible-api.com/${encodeURIComponent(query)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        return await m.send(
          `*_Error: ${response.status} ${response.statusText}_*`
        );
      }

      const data = await response.json();
      const verse = data.text;
      const reference = `${query}`; // This will be used as the subtitle (chapter/verse)
      
      // Structuring the message with reduced space
      const message = `╔════════════════◇\n` +
                      `║ *🛐Content:* ${verse.trim()}\n` +  // trim() removes any unnecessary whitespace
                      `║ *✨Reference:* ${reference}\n` +
                      `║ *✨Author:* > Made By X-BOT-MD\n` +
                      `╚════════════════◇`;

      await m.send(message);
    } catch (e) {
      await m.error(`${e}\n\ncommand: bible`, e);
    }
  }
);
