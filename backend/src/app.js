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
  'https://zenvoa-technologies.onrender.com', 
  'https://zenvoa-portfolio.onrender.com',    
  'https://zenvoatechnologies.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

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
