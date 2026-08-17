# Node.js Express Boilerplate

A standard Node.js API boilerplate using Express, organized with a clean architecture.

## Features
- **Express** - Fast, unopinionated, minimalist web framework for Node.js
- **Dotenv** - Loads environment variables from a `.env` file
- **Cors** - Middleware to enable CORS
- **Helmet** - Secures Express apps by setting various HTTP headers
- **Nodemon** - Automatically restarts the node application when file changes in the directory are detected

## Directory Structure
```
src/
  app.js                 # App configuration
  index.js               # Entry point
  controllers/           # Route controllers (request handling)
  middlewares/           # Custom express middlewares
  routes/                # Route definitions
```

## Getting Started

### Prerequisites
- Node.js installed

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and update variables if needed.

### Running the App
- **Development**: `npm run dev`
- **Production**: `npm start`

## API Endpoints
- `GET /` - Base URL
- `GET /api/health` - Health check route
