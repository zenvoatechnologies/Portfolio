const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const projectsRouter = require('./routes/projects');
const leadsRouter = require('./routes/leads');

const app = express();

app.use(express.json({ limit: '10mb' }));

// CORS Configuration
const allowedOrigins = [
  'http://localhost:5173',
  'https://portfolio-frontend-alpha-gules.vercel.app',
  'https://zenvoatechnologies.com',
  // You MUST add your current Vercel Frontend URL here:
  'https://zenvoa-technologies.vercel.app',
  'https://zenvoa-technologies-git-main-zenvoatechnologies-projects.vercel.app', // Vercel Preview URL
  'https://benvoabackend.vercel.app'
];

// CRITICAL: The cors middleware is now responsible for handling preflight (OPTIONS)
app.use(cors({
  origin: function (origin, callback) {
    // Allows requests with no origin (like mobile apps or tools)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('CORS rejected origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.use(morgan('tiny'));

app.get('/', (req, res) => res.send('Zenvoa Backend is running'));

// Fix for 405 Error: Explicitly handle Preflight (OPTIONS) requests
// We use explicit paths to avoid the "Missing parameter name" crash caused by global wildcards
app.options('/api/projects', cors());
app.options('/api/leads', cors());

app.use('/api/projects', projectsRouter);
app.use('/api/leads', leadsRouter);

// 404 handler
app.use((req, res) => res.status(404).json({ message: 'Not Found' }));

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

module.exports = app;