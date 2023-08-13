import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

// dotenv setup
dotenv.config(); // to pull our enviorment varibles from dotEnv file

// initialise express application
const app = express();
// add additional middleware
app.use(cors);
app.use(express.json({ limit: "50mb" }));

// ROUTE
app.get("/", async (req, res) => {
  res.send("Hello from DALL-E");
});

// function to run server
const startServer = async () => {
  try {
    app.listen(3000, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
