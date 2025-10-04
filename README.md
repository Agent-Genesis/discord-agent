# Discord Agent Bot

A Discord bot built with discord.js and TypeScript.

## Setup

### Prerequisites

- Node.js (v16.9.0 or higher)
- npm (Node Package Manager)
- A Discord account
- A Discord server where you can test the bot
- TypeScript (optional, but recommended for development)

### Installation

#### 1. Install dependencies

```bash
npm install
```

#### 2. Create a `.env` file based on `.env.example`

```bash
cp .env.example .env
```

#### 3. Configure your Discord bot

**Detailed setup instructions are in [`APP_INFO.md`](./APP_INFO.md)**

Quick setup:

1. Go to <https://discord.com/developers/applications>
2. Create a new application (name cannot contain "discord")
3. Go to "Bot" section and click "Add Bot"
4. Click "Reset Token" to get your bot token
   - **Note**: You may need to verify with 2FA (authenticator app or mobile link)
   - Copy the token immediately (shows only once!)
5. Paste the token in `.env` as `DISCORD_TOKEN`
6. Enable **MESSAGE CONTENT INTENT** in Privileged Gateway Intents
7. Click "Save Changes"
8. Copy the Application ID from the General Information section
9. Paste it in `.env` as `DISCORD_CLIENT_ID`
10. (Optional) Get your server ID and add as `DISCORD_GUILD_ID` for faster development

#### 4. Invite the bot to your server

1. Go to OAuth2 > URL Generator
2. Select scopes: `bot`, `applications.commands`
3. Select permissions: `Send Messages`, `Use Slash Commands`
4. Copy the generated URL and open it in your browser
5. Select your server and authorize the bot

## Development

Run in development mode with auto-reload:

```bash
npm run dev
```

## Build

Build for production:

```bash
npm run build
```

Run the built version:

```bash
npm start
```

## Commands

- `/ping` - Test command that replies with "Pong!"

## Adding New Commands

1. Create a new file in `src/commands/` (e.g., `mycommand.ts`)
2. Export `data` (SlashCommandBuilder) and `execute` function
3. Add the command to `src/commands/index.ts`
