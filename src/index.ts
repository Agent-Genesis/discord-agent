import { Client, GatewayIntentBits, Events, REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
import { commands } from './commands';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = commands.find((cmd) => cmd.data.name === interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error('Error executing command:', error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: 'There was an error while executing this command!',
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: 'There was an error while executing this command!',
        ephemeral: true,
      });
    }
  }
});

async function registerCommands() {
  const token = process.env.DISCORD_TOKEN;
  const clientId = process.env.DISCORD_CLIENT_ID;
  const guildId = process.env.DISCORD_GUILD_ID;

  if (!token || !clientId) {
    throw new Error('Missing DISCORD_TOKEN or DISCORD_CLIENT_ID in environment variables');
  }

  const rest = new REST().setToken(token);

  try {
    console.log(`Started refreshing ${commands.length} application (/) commands.`);

    const commandsData = commands.map((cmd) => cmd.data.toJSON());

    if (guildId) {
      await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
        body: commandsData,
      });
      console.log('Successfully registered guild commands.');
    } else {
      await rest.put(Routes.applicationCommands(clientId), {
        body: commandsData,
      });
      console.log('Successfully registered global commands.');
    }
  } catch (error) {
    console.error('Error registering commands:', error);
  }
}

async function main() {
  const token = process.env.DISCORD_TOKEN;

  if (!token) {
    throw new Error('Missing DISCORD_TOKEN in environment variables');
  }

  await registerCommands();
  await client.login(token);
}

main().catch(console.error);
