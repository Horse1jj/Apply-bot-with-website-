import express from 'express';
import dotenv from 'dotenv';
import { Client, GatewayIntentBits, TextChannel } from 'discord.js';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.TOKEN;
const APPLICATION_CHANNEL_ID = process.env.APPLICATION_CHANNEL_ID;

// Discord Bot Setup
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.login(TOKEN);

// Middleware to parse JSON
app.use(express.json());

// Serve the static files from the frontend
app.use(express.static(path.join(__dirname, 'frontend/public')));

// API endpoint for form submission
app.post('/api/submit', async (req, res) => {
  const { name, email, message } = req.body;
  const relayChannel = await client.channels.fetch(APPLICATION_CHANNEL_ID) as TextChannel;

  if (!relayChannel) {
    return res.status(500).json({ error: "Channel not found" });
  }

  // Send the application data to the Discord channel
  await relayChannel.send(`New application:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  res.json({ success: true });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

