const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String }],
  correctAnswer: { type: String, required: true },
  explanation: { type: String },
  topic: { type: String },
});

const practiceTestSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String },
    questions: [questionSchema],
    timeLimit: { type: Number, default: 45 }, // minutes
    difficulty: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], default: "Beginner" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PracticeTest", practiceTestSchema);
