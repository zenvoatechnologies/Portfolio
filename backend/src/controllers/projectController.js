const Project = require('../models/Project');

exports.list = async (req, res) => {
  if (process.env.MOCK_MODE === 'true') {
    return res.json([
      {
        _id: 'mock-1',
        title: 'Turf Booking App',
        slug: 'turf-app',
        description: '🚧 In Progress — A dedicated platform for sports enthusiasts to book turfs, managing slots and payments seamlessly.',
        images: [], // Empty to show placeholder
        techStack: ['React Native', 'Node.js', 'Express'],
        createdAt: new Date().toISOString()
      }
    ]);
  }
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.get = async (req, res) => {
  if (process.env.MOCK_MODE === 'true') {
    if (req.params.slug === 'turf-app') {
      return res.json({
        _id: 'mock-1',
        title: 'Turf Booking App',
        slug: 'turf-app',
        description: '🚧 In Progress — A dedicated platform for sports enthusiasts to book turfs, managing slots and payments seamlessly. Features include real-time availability, secure payments via Razorpay, and an admin dashboard for turf owners.',
        images: ['https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80&w=1000'], // Placeholder image
        techStack: ['React Native', 'Node.js', 'Express', 'MongoDB'],
        createdAt: new Date().toISOString()
      });
    }
    return res.status(404).json({ message: 'Not found (Mock Mode)' });
  }

  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) return res.status(404).json({ message: 'Not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const p = new Project(req.body);
    await p.save();
    res.status(201).json(p);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
