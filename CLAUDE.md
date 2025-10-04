# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Information

**GitHub Repository:** https://github.com/Agent-Genesis/discord-agent
**Project:** Discord Agent Bot
**Owner:** Agent-Genesis

## Development Commands

```bash
# Development with auto-reload
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Type checking
npm run typecheck

# Linting
npm run lint
```

## Project Structure

This is a Discord bot built with TypeScript and discord.js. The codebase follows a modular command structure:

- `src/index.ts` - Main bot entry point, handles client setup, command registration, and interaction routing
- `src/commands/` - Command modules directory
  - `src/commands/index.ts` - Exports all commands as a single array
  - `src/commands/ping.ts` - Example command implementation
- `dist/` - Compiled TypeScript output (after `npm run build`)

## Architecture

### Bot Initialization Flow
1. Load environment variables from `.env`
2. Create Discord client with required intents (Guilds, GuildMessages, MessageContent)
3. Register slash commands (guild-specific if `DISCORD_GUILD_ID` is set, global otherwise)
4. Login and start listening for interactions

### Command System
- Commands are modular TypeScript files in `src/commands/`
- Each command exports `data` (SlashCommandBuilder) and `execute` function
- Commands are automatically registered via the array in `src/commands/index.ts`
- Interaction handling includes error catching and user feedback

### Adding New Commands
1. Create new file in `src/commands/` (e.g., `mycommand.ts`)
2. Export `data` and `execute` following the pattern in `ping.ts`
3. Import and add to the commands array in `src/commands/index.ts`

## Environment Setup

Required environment variables (see `.env.example`):
- `DISCORD_TOKEN` - Bot token from Discord Developer Portal
- `DISCORD_CLIENT_ID` - Application ID from Discord Developer Portal
- `DISCORD_GUILD_ID` - Optional server ID for faster command registration during development

The bot requires MESSAGE CONTENT INTENT to be enabled in the Discord Developer Portal.

## Bot Permissions

Current bot permissions integer: `2147552256`
- View Channels
- Send Messages
- Read Message History
- Use Slash Commands

## Dependencies

- `discord.js` - Discord API wrapper
- `dotenv` - Environment variable management
- `tsx` - TypeScript execution for development
- `typescript` - TypeScript compiler
- `eslint` - Code linting

## Git Workflow

This repository is connected to GitHub. Common git commands for this project:

```bash
# Check status and pull latest changes
git status
git pull

# Add changes and commit
git add .
git commit -m "Description of changes"

# Push to GitHub
git push

# Create new branch for features
git checkout -b feature/new-feature-name
```