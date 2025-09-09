
// require('dotenv').config(); // Load environment variables
// const connectDB = require("./config/db");
// const School = require("./models/School");
// const app = require("./app");

// const PORT = process.env.PORT || 5000; // Default to 5000 to match frontend

// const startServer = async () => {
//   try {
//     // 1. Connect to the database
//     await connectDB();
//     console.log("MongoDB Connected...");
    

//     // 2. Start the server after DB connection
//     app.listen(PORT, "0.0.0.0", () =>
//       console.log(`Server running in ${process.env.NODE_ENV || "development"} on port ${PORT}`)
//     );
//   } catch (error) {
//     console.error("Failed to connect to DB, server is not starting.", error);
//     process.exit(1);
//   }
// };

// startServer();


// require('dotenv').config(); // Load environment variables
// const connectDB = require("./config/db");
// const School = require("./models/School");
// const app = require("./app");

// const PORT = process.env.PORT || 5000; // Default to 5000 to match frontend

// const startServer = async () => {
//   try {
//     // 1. Connect to the database
//     await connectDB();
//     console.log("✅ MongoDB Connected...");

//     // 2. 🔹 Run one-time Independent schools fix (optional)
//     try {
//       const result = await School.updateMany(
//         { board: "Other", fees: { $regex: "£" } }, // Example condition
//         { $set: { board: "Independent" } }
//       );
//       if (result.modifiedCount > 0) {
//         console.log(`🎉 Fixed ${result.modifiedCount} schools -> set to Independent`);
//       } else {
//         console.log("ℹ️ No schools needed fixing");
//       }
//     } catch (err) {
//       console.error("Error while fixing Independent schools:", err);
//     }

//     // 3. Start the server
//     app.listen(PORT, "0.0.0.0", () =>
//       console.log(`🚀 Server running in ${process.env.NODE_ENV || "development"} on port ${PORT}`)
//     );
//   } catch (error) {
//     console.error("❌ Failed to connect to DB, server is not starting.", error);
//     process.exit(1);
//   }
// };

// startServer();


require('dotenv').config();
const connectDB = require("./config/db");
const app = require("./app");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB Connected...");

    app.listen(PORT, "0.0.0.0", () =>
      console.log(`Server running in ${process.env.NODE_ENV || "development"} on port ${PORT}`)
    );
  } catch (error) {
    console.error("Failed to connect to DB, server is not starting.", error);
    process.exit(1);
  }
};

startServer();
