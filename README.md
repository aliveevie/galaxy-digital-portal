# Galaxy Digital Portal

## About

Galaxy Digital Portal is a modern web application featuring a sleek UI with an interactive rotating world animation that seamlessly blends with gradient backgrounds. The portal serves as a digital gateway to Galaxy services and information.

## Features

- Modern, responsive UI built with React and TypeScript
- Interactive 3D world animation in the hero section
- Seamless gradient background integration
- Clean design with proper spacing and matching color schemes

## Technologies Used

This project is built with:

- React with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Radix UI components
- AOS for scroll animations

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or bun package manager

### Installation

Follow these steps to set up the project locally:

```sh
# Step 1: Clone the repository
git clone [repository URL]

# Step 2: Navigate to the project directory
cd galaxy-digital-portal

# Step 3: Install the necessary dependencies
npm install
# or if using bun
bun install

# Step 4: Start the development server
npm run dev
# or if using bun
bun run dev
```

The application will be available at `http://localhost:8080` by default.

## Building for Production

To create a production build:

```sh
npm run build
# or
bun run build
```

The build artifacts will be stored in the `dist/` directory.

## Preview Production Build

To preview the production build locally:

```sh
npm run preview
# or
bun run preview
```

## Server

The project includes a Node.js/Express server that provides AI-powered chat functionality and API endpoints.

### Server Features

- Express.js server with TypeScript
- AI-powered chat support using OpenAI GPT-3.5-turbo
- CORS-enabled for cross-origin requests
- Health check endpoint
- Environment variable configuration

### Server Prerequisites

- Node.js (LTS version recommended)
- OpenAI API key (required for AI chat functionality)

### Server Setup

1. **Navigate to the server directory:**
   ```sh
   cd server
   ```

2. **Install server dependencies:**
   ```sh
   npm install
   ```

3. **Create environment file:**
   Create a `.env` file in the `server/` directory with your OpenAI API key:
   ```sh
   OPEN_AI_KEY=your_openai_api_key_here
   PORT=4500  # Optional, defaults to 4500
   ```

4. **Start the server:**
   ```sh
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

The server will be available at `http://localhost:4500` by default.

### Server Endpoints

- `GET /` - Server status and information
- `GET /health` - Health check endpoint
- `POST /api/chat` - AI-powered chat endpoint (requires message in request body)

### Server Scripts

- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server
- `npm run build` - Build TypeScript to JavaScript

## Development

### Code Structure

- `src/` - Contains all source code
  - `components/` - Reusable UI components
  - `pages/` - Page components
  - `assets/` - Static assets like images and fonts
  - `styles/` - Global styles and Tailwind configuration
- `server/` - Backend server code
  - `chat.ts` - Main server file with Express setup and AI chat functionality

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally
