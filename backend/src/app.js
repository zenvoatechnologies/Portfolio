const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const projectsRouter = require('./routes/projects');
const leadsRouter = require('./routes/leads');

const app = express();

app.use(express.json({ limit: '10mb' }));

// CORS Configuration - CRITICAL: Add your Vercel Frontend URLs
const allowedOrigins = [
  'http://localhost:5173',
  'https://zenvoatechnologies.com', // Future domain
  'https://zenvoa-technologies.vercel.app' // Your Vercel Production Frontend URL
];

// The CORS middleware function handles all origin checks
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    // 1. Check against explicitly allowed domains
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }

    // 2. Check for Vercel Preview/Branch Deployments 
    // This allows any subdomain ending with -zenvoatechnologies-projects.vercel.app
    if (origin.endsWith('-zenvoatechnologies-projects.vercel.app')) {
      return callback(null, true);
    }
    
    // 3. Reject other origins
    console.log('CORS rejected origin:', origin);
    return callback(new Error('Not allowed by CORS'), false);
  },
  credentials: true,
  // The methods array explicitly tells the browser which methods are allowed, 
  // resolving the preflight (OPTIONS) check that caused the failure.
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
};

app.use(cors(corsOptions));

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