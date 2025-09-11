const express = require('express');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const schoolRoutes = require("./routes/schoolRoutes");
const regionRoutes = require('./routes/regionRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const practiceTestRoutes = require('./routes/practiceTestRoutes');
const activityRoutes = require('./routes/activityRoutes');

// ✅ New import (Tutor Routes)
const tutorRoutes = require('./routes/tutors');

const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000', // frontend URL
  credentials: true,
}));

// Parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use("/api/schools", schoolRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/practice-tests', practiceTestRoutes);
app.use('/api/recent-activity', activityRoutes);

// ✅ New Tutor Route
app.use('/api/tutors', tutorRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
