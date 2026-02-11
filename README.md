# Gemini AI Chatbot

A simple Node.js application that provides an interactive chat interface with Google's Gemini AI model. Ask questions and receive AI-generated responses directly from your terminal.

## Features

- Interactive command-line chat interface
- Integration with Google's Gemini AI API
- Asynchronous handling for smooth user experience
- Environment variable support for API key security

## Prerequisites

- Node.js (version 14 or higher)
- A Google Gemini API key (obtain from [Google AI Studio](https://makersuite.google.com/app/apikey))

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/gemini-ai-chatbot.git
   cd gemini-ai-chatbot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

## Usage

Run the application:

```bash
npm start
# or
node app.js
```

The app will prompt you to ask a question. Type your query and press Enter to receive a response from the Gemini AI.

## Project Structure

- `app.js` - Main application entry point
- `util/ai.js` - Gemini AI API integration
- `util/input.js` - User input handling utility
- `package.json` - Project dependencies and scripts
- `.env` - Environment variables (API key)

## API Reference

This project uses the `@google/genai` package to interact with Google's Gemini API. The AI model used is `gemini-3-flash-preview`.

## Contributing

Feel free to submit issues and enhancement requests!

