const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Base route
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the Node.js API!' });
});

// Error handling middleware
app.use(errorHandler);

module.exports = app;
