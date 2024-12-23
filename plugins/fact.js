const axios = require('axios');
const fetch = require('node-fetch');
const { cmd } = require('../command');

cmd({
    pattern: "facts",
    desc: "🧠 Get a random fun fact",
    react: "😝",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://nekos.life/api/v2/fact';  // API for random facts
        const response = await axios.get(url);
        const fact = response.data.fact;

        const funFact = `
  *X-BOT-MD RANDOM FACT*

${fact}


`;

        return reply(funFact);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while fetching a fun fact. Please try again later🤕.");
    }
});

cmd({
    pattern: "joke2",
    desc: "😂 Get a random joke",
    react: "🤣",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://v2.jokeapi.dev/joke/Any?type=single"';  // API for random jokes
        const response = await axios.get(url);
        const joke = response.data;
        const jokeMessage = `
  *As requested* 
*${joke.joke}*
${Category.category} 😄
> *POWERED BY X-BOT-MD*
`;
        return reply(jokeMessage);
    } catch (e) {
        console.log(e);
        return reply("⚠️ Couldn't fetch a joke right now. Please try again later.");
    }
});
cmd({
    pattern: "rizz",
    desc: "Get a random pickup line",
    react: "🫠",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://api.popcat.xyz/pickuplines';  // API for random facts
        const response = await axios.get(url);
        const { pickupline, contributor } = data;

        const message = `
  *X-BOT-MD RANDOM PICKUPLINE*

${pickupline}


`;

        return reply(funFact);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while fetching pickupline. Please try again later🤕.");
    }
});
cmd({
    pattern: "question",
    desc: "Get a random question",
    react: "🤔",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://opentdb.com/api.php?amount=1&type=multiple';  // API for random question 
        const response = await axios.get(url);
        const question = data.results[0].question;

        const question = `
  *X-BOT-MD RANDOM QUESTION*

${question}


`;

        return reply(funFact);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while fetching a question. Please try again later🤕.");
    }
});
cmd({
    pattern: "truth",
    desc: "Get a random truth question",
    react: "🌚",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://api.truthordarebot.xyz/v1/truth';  // API for random facts
        const response = await axios.get(url);
        const truthQuestion = data.question;

        const truthQuestion = `
  *X-BOT-MD RANDOM TRUTH*

${truthQuestion}


`;

        return reply(funFact);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while fetching a truth. Please try again later🤕.");
    }
});
cmd({
    pattern: "dare",
    desc: "Get a random date question",
    react: "🌝",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://api.truthordarebot.xyz/v1/dare';  // API for random facts
        const response = await axios.get(url);
        const dareChallenge = data.question;

        const dareChallenge = `
  *X-BOT-MD RANDOM DARE*

${dareChallenge}


`;

        return reply(funFact);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while fetching a dare. Please try again later🤕.");
    }
});
 cmd(
  {
    pattern: "bible",
    desc: "Get a specific Bible verse based on user query.",
    category: "fun",
    filename: __filename,
  },
  async (conn, mek, m, { from, q, reply, query }) => {
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
