const Activity = require("../models/Activity");

// GET recent activities
const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find().sort({ createdAt: -1 }).limit(20);
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create activity
const createActivity = async (req, res) => {
  try {
    const activity = new Activity(req.body);
    await activity.save();
    res.status(201).json(activity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getActivities, createActivity };
