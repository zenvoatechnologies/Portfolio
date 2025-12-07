const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const projectsRouter = require('./routes/projects');
const leadsRouter = require('./routes/leads');

const app = express();

app.use(express.json({ limit: '10mb' }));

// CORS Configuration - Add your Vercel Frontend URLs
const allowedOrigins = [
  'http://localhost:5173',
  'https://zenvoatechnologies.com', // Future domain
  'https://zenvoa-technologies-backend.vercel.app', // Backend URL
  'https://zenvoa-technologies.vercel.app', // Vercel Production Frontend
  // Pattern for all Vercel Preview/Branch Deployments:
  /https:\/\/(.*)-zenvoatechnologies-projects\.vercel\.app$/ 
];

// The CORS middleware function handles all origin checks
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    const isAllowed = allowedOrigins.some(allowed => {
      if (typeof allowed === 'string') {
        return allowed === origin;
      }
      return allowed.test(origin);
    });

    if (isAllowed) {
      callback(null, true);
    } else {
      console.log('CORS rejected origin:', origin);
      callback(new Error('Not allowed by CORS'), false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
};

app.use(cors(corsOptions)); // This single line handles the CORS preflight (OPTIONS) check

// 🚨 REMOVE THIS LINE: The problematic app.options('*', cors()) line should be removed.

app.use(morgan('tiny'));

app.get('/', (req, res) => res.send('Zenvoa Backend is running'));

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