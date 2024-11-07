import { Client, GatewayIntentBits, Partials, TextChannel } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const TOKEN = process.env.TOKEN; // Use environment variables for security
const APPLICATION_CHANNEL_ID = process.env.APPLICATION_CHANNEL_ID; // The channel where messages should be relayed

// Initialize the Discord client with necessary intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Channel], // Required to receive DMs
});

// Event: Bot is ready
client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

// Event: Message received
client.on('messageCreate', async (message) => {
  // Ignore messages from bots
  if (message.author.bot) return;

  // Check if the message is in a DM channel
  if (message.channel.type === 1) { // Type 1 indicates a DM channel
    // Relay the message to the specified channel
    const relayChannel = await client.channels.fetch(APPLICATION_CHANNEL_ID) as TextChannel;
    if (!relayChannel) {
      console.error("Couldn't find the relay channel.");
      return;
    }

    relayChannel.send({
      content: `New application from ${message.author.tag}:\n${message.content}`,
    });

    // Respond to the user
    message.author.send('Thank you! Your application has been submitted.');
  }
});

// Log the bot in
client.login(TOKEN);

