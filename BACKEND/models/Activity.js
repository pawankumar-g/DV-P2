const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["test", "achievement", "general"], required: true },
    message: { type: String, required: true },
    score: { type: Number }, // optional, only for tests
  },
  { timestamps: true }
);

module.exports = mongoose.model("Activity", activitySchema);
