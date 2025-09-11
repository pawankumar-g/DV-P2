const PracticeTest = require("../models/PracticeTest");

// GET all tests
const getPracticeTests = async (req, res) => {
  try {
    const tests = await PracticeTest.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET single test by ID
const getPracticeTestById = async (req, res) => {
  try {
    const test = await PracticeTest.findById(req.params.id);
    if (!test) return res.status(404).json({ message: "Test not found" });
    res.json(test);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create test
const createPracticeTest = async (req, res) => {
  try {
    const test = new PracticeTest(req.body);
    await test.save();
    res.status(201).json(test);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getPracticeTests, getPracticeTestById, createPracticeTest };
