import express from "express";
import * as dotenv from "dotenv";
import { Leap } from "@leap-ai/sdk";

dotenv.config();

const router = express.Router();

const leap = new Leap(process.env.LEAP_API_KEY);

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL-E!" });
});

router.route("/").post(async (req, res) => {
  try {
    // const { prompt } = req.body;
    const prompt = req.body.prompt;

    leap.usePublicModel("sd-1.5");

    //generate the image by passing in the prompt, using leap SDK
    const response = await leap.generate.generateImage({
      prompt: prompt,
    });
    const imageUrl = response.data.images[0].uri;

    //send JSON response to front end, with the data being the image in this case
    res.status(200).json({
      photo: imageUrl,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(error?.response.data.error.message || "Something went wrong");
  }
});

export default router;
