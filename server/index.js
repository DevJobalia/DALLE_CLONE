// https://youtu.be/EyIvuigqDoA?t=4818

import express from "express";
import * as dotenv from "dotenv"; // to access enviorment variables
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

// dotenv setup
dotenv.config(); // to pull our enviorment varibles from dotEnv file

// initialise express application
const app = express();
// add additional middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// API ENDPOINTS: to connect our front end side
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

// ROUTE
app.get("/", async (req, res) => {
  res.send("Hello from dalle");
});

// function to run server
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.log(error);
  }
};

startServer();

// import express from "express";
// import * as dotenv from "dotenv";
// import cors from "cors";

// import connectDB from "./mongodb/connect.js";
// import postRoutes from "./routes/postRoutes.js";
// import dalleRoutes from "./routes/dalleRoutes.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json({ limit: "50mb" }));

// app.use("/api/v1/post", postRoutes);
// app.use("/api/v1/dalle", dalleRoutes);

// app.get("/", async (req, res) => {
//   res.status(200).json({
//     message: "Hello from dalle!",
//   });
// });

// const startServer = async () => {
//   try {
//     connectDB(process.env.MONGODB_URL);
//     app.listen(8080, () => console.log("Server started on port 8080"));
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();
