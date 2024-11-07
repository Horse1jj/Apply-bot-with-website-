# Apply-bot-with-website-
A typescript/svelte apply bot with a website (setup) 



This project is a Discord bot built with TypeScript, Express, and Svelte. The bot allows users to submit applications via a web-based dashboard, and it relays their submissions to a specified Discord channel.

## Features

- **Discord Bot**: Built with `discord.js`, it listens for incoming messages and can relay information from the web form to a specified Discord channel.
- **Express Server**: Hosts a REST API to receive application data from the frontend and relay it to Discord.
- **Svelte Frontend**: A web-based dashboard for users to fill out and submit application forms.

## Project Structure

my-discord-bot/ ├── src/ │ ├── bot.ts # Discord bot setup │ ├── server.ts # Express server setup and API for form submissions │ └── frontend/ # Frontend folder for Svelte app │ ├── public/ # Public folder for serving static files │ │ └── index.html # HTML entry point for Svelte app │ └── src/ │ ├── App.svelte # Main Svelte component with the form │ └── main.ts # Entry point for Svelte app ├── tsconfig.json # TypeScript configuration ├── package.json # Dependencies and scripts └── .env # Environment variables


## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Setup Instructions

1. **Clone the repository** and navigate to the project directory.

   ```bash
   git clone <repository-url>
   cd my-discord-bot

Install root dependencies (for the bot, server, and general setup).

``` bash 

npm install

```
Install frontend dependencies for the Svelte app.
cd src/frontend

``` bash 
npm install
cd ../..

``` 

Create a .env file in the root directory to store environment variables.

``` env

TOKEN=YOUR_DISCORD_BOT_TOKEN
APPLICATION_CHANNEL_ID=YOUR_DISCORD_CHANNEL_ID

``` 

Replace YOUR_DISCORD_BOT_TOKEN with your bot token from the Discord Developer Portal.

Replace YOUR_DISCORD_CHANNEL_ID with the channel ID where you want applications to be posted.

Build the frontend:

``` bash

npm run build:frontend

``` 
This will create a build folder in src/frontend/public with the compiled Svelte app.

Running the Project

You have two main ways to run the project:

Development Mode: Run both the backend server and the frontend simultaneously with hot-reloading.


``` bash 

npm run dev

``` 

Production Mode: First, build the frontend, then run the backend.

``` bash 

npm run build:frontend
npm start

``` 
## usage

Visit the Web Dashboard: Open your browser and go to http://localhost:3000. You should see the application form.

Submit the Form: Fill out and submit the form. The bot will post your application details in the specified Discord channel.

Discord Bot Status: The bot should be online and able to send messages to the channel defined in APPLICATION_CHANNEL_ID.

## troubleshooting 

Bot Not Responding: Ensure your bot token is correctly set in the .env file and that the bot has permission to send messages to the specified channel.

Server Not Starting: Make sure all dependencies are installed and that the .env file is correctly configured.

Frontend Not Displaying: If the frontend does not load, ensure that npm run build:frontend was successful and that the server is running.


## Contributing

Feel free to submit pull requests to improve the project!

