const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "wastalk",
    alias: ["watalk"],
    desc: "download tw videos",
    category: "download",
    react: "📩",
    filename: __filename
},async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = `https://itzpire.com/stalk/whatsapp-channel?url=${q}`;  // API for random facts
        const response = await axios.get(url);
        const data = response.data.data;
      
      const caption = `
*WhatsApp Channel Information*

*Title:* ${data.title}
*Followers:* ${data.followers}
*Description:* ${data.description || "No description provided"}

\t*X-BOT-MD WA STALKER*
`;

    return reply(caption);
    } catch (e) {
    console.log(e);
        return reply("⚠️ An error occurred while fetching data. Please try again later🤕.");
    }
});
