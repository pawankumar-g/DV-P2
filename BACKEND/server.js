
require('dotenv').config(); // Load environment variables
const connectDB = require("./config/db");
const app = require("./app");

const PORT = process.env.PORT || 5000; // Default to 5000 to match frontend

const startServer = async () => {
  try {
    // 1. Connect to the database
    await connectDB();
    console.log("MongoDB Connected...");

    // 2. Start the server after DB connection
    app.listen(PORT, "0.0.0.0", () =>
      console.log(`Server running in ${process.env.NODE_ENV || "development"} on port ${PORT}`)
    );
  } catch (error) {
    console.error("Failed to connect to DB, server is not starting.", error);
    process.exit(1);
  }
};

startServer();
