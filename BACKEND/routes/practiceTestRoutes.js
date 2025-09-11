const express = require("express");
const { getPracticeTests, getPracticeTestById, createPracticeTest } = require("../controllers/practiceTestController");

const router = express.Router();

router.get("/", getPracticeTests);
router.get("/:id", getPracticeTestById);
router.post("/", createPracticeTest);

module.exports = router;
