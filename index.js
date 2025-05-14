const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// When the bot is ready
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

  // Set custom status
  client.user.setActivity('robinsart.r0cu.xyz', {
    type: ActivityType.Playing
  });
});

// Keep alive using an express server (useful for platforms like Repl.it or Glitch)
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bot is alive!'));
app.listen(3000, () => console.log('Keep-alive server running on port 3000'));

// Log in the bot
client.login('MTM3MTU2ODY3MTQzMTg1NjE1OA.GBkzTa.4orpDsJQRaToAJ_hUql50u65FBXYr3DlwSCR30');