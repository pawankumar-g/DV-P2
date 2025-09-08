const express = require('express');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
<<<<<<< HEAD
const schoolRoutes = require("./routes/schoolRoutes");
=======
const regionRoutes = require('./routes/regionRoutes');
>>>>>>> 06b4a28d5f4546e7a2e2a066f050fd071cc454cb

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
<<<<<<< HEAD
app.use("/api/schools", schoolRoutes);
=======
app.use('/api/regions', regionRoutes);
>>>>>>> 06b4a28d5f4546e7a2e2a066f050fd071cc454cb

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
