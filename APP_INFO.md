# Application Information

This file contains important details about the Discord application/bot.

## Application Details

**Name:** agent-bot

**Application ID:** 1424035109962776656

**Public Key:** 6fea74af248b6ac50d63029a8de40981024f91426822b7a21515921aa7e168a7

**Guild ID (Server ID):** 1412082661890982041

**Created:** 2025-10-04

## Bot Setup Instructions

### Step 1: Create Bot User

1. Go to the [Developer Portal](https://discord.com/developers/applications/1424035109962776656)
2. Navigate to the **"Bot"** section in the left sidebar
3. Click **"Add Bot"** (if not already created)
4. Customize bot username and icon (optional)

### Step 2: Get Bot Token

1. In the Bot section, click **"Reset Token"**
2. **Important**: You may need to verify with 2FA (Two-Factor Authentication)
   - Discord will ask for a 6-digit code from your authenticator app
   - Alternative: Discord may send a verification link to your mobile device
   - Enter the code or click the verification link
3. **Copy the token immediately** - it only shows once!
4. Paste it into your `.env` file as `DISCORD_TOKEN`

### Step 3: Configure Bot Settings

In the Bot section, configure these settings:

**Authorization Flow:**

- ✅ **Public Bot** - Enable if you want others to invite your bot
- ⬜ **Requires OAuth2 Code Grant** - Leave disabled for basic bots

**Privileged Gateway Intents** (scroll down):

- ✅ **MESSAGE CONTENT INTENT** - **REQUIRED** for reading message content (ENABLED)
- ✅ **PRESENCE INTENT** - Track user online/offline status (ENABLED)
- ⬜ **SERVER MEMBERS INTENT** - Optional, only if you need member lists/events (DISABLED)

**Important**: Click **"Save Changes"** at the bottom!

### Step 4: Invite Bot to Server

1. Go to **OAuth2 > URL Generator**
2. Select scopes:
   - ✅ `bot`
   - ✅ `applications.commands`
3. Select bot permissions:
   - ✅ Send Messages
   - ✅ Use Slash Commands
   - ✅ Read Messages/View Channels
4. Copy the generated URL at the bottom
5. Open it in your browser and select your server

### Step 5: Get Your Server (Guild) ID (Optional but Recommended)

For faster command registration during development:

1. Enable Developer Mode in Discord:
   - User Settings > Advanced > Developer Mode
2. Right-click your server icon
3. Click "Copy Server ID"
4. Paste it in `.env` as `DISCORD_GUILD_ID`

## Configuration

### Required Intents (Bot Settings)

- **MESSAGE CONTENT INTENT** - Required for reading message content
- SERVER MEMBERS INTENT - Optional, for member-related features
- PRESENCE INTENT - Optional, for presence updates

## Current Bot Configuration

### Authorization Flow

- ✅ **Public Bot** - ENABLED
- ⬜ **Requires OAuth2 Code Grant** - DISABLED

### Privileged Gateway Intents

- ✅ **MESSAGE CONTENT INTENT** - ENABLED
- ✅ **PRESENCE INTENT** - ENABLED
- ⬜ **SERVER MEMBERS INTENT** - DISABLED

### Bot Permissions

**General Permissions:**

- ✅ View Channels

**Text Permissions:**

- ✅ Send Messages
- ✅ Read Message History
- ✅ Use Slash Commands

**Voice Permissions:**

- None

**Permissions Integer:** `2147552256`

### OAuth2 Configuration

**Integration Type:** Guild Install

**Scopes:**

- `bot`
- `applications.commands`

**Generated URL:**

```
https://discord.com/oauth2/authorize?client_id=1424035109962776656&permissions=2147552256&integration_type=0&scope=bot+applications.commands
```

### Important Links

- [Developer Portal](https://discord.com/developers/applications/1424035109962776656)
- [Bot Settings](https://discord.com/developers/applications/1424035109962776656/bot)
- [OAuth2 URL Generator](https://discord.com/developers/applications/1424035109962776656/oauth2/url-generator)

## Environment Variables

See `.env.example` for required environment variables:

- `DISCORD_TOKEN` - Bot token (get from Bot section)
- `DISCORD_CLIENT_ID` - Application ID (above)
- `DISCORD_GUILD_ID` - Optional test server ID

## Notes

- Bot token should be kept secret and never committed to git
- Application ID and Public Key are safe to share
- For bots in 75+ servers, verification is required
- Privileged intents (MESSAGE CONTENT, SERVER MEMBERS, PRESENCE) require approval for verified bots
