// backend/scripts/seed.js
require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Project = require('../src/models/Project');

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/zenvoa';
const sample = [
  {
    title: 'Zenvoa Corporate Site',
    slug: 'zenvoa-corporate-site',
    description: 'A responsive corporate site built for conversion with SEO-first approach.',
    images: ['/images/sample1.jpg'],
    techStack: ['React', 'Tailwind', 'Node', 'MongoDB']
  },
  {
    title: 'E-Commerce Store',
    slug: 'ecommerce-store',
    description: 'Fast, secure e-commerce with payment integration and admin dashboard.',
    images: ['/images/sample2.jpg'],
    techStack: ['React', 'Express', 'Stripe', 'MongoDB']
  },
  {
    title: 'SaaS Dashboard',
    slug: 'saas-dashboard',
    description: 'SaaS product landing + dashboard with analytics & role-based access.',
    images: ['/images/sample3.jpg'],
    techStack: ['React', 'Node', 'Analytics']
  }
];

(async () => {
  try {
    await mongoose.connect(MONGO, { dbName: process.env.MONGO_DBNAME || 'zenvoa' });
    console.log('Connected to DB');
    await Project.deleteMany({});
    await Project.insertMany(sample);
    console.log('Seeded projects');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
