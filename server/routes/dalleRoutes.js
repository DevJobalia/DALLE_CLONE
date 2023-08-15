// import express from "express";
// import * as dotenv from "dotenv";
// import { Configuration, OpenAIApi } from "openai";

// dotenv.config();

// const router = express.Router();

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// router.route("/").get((req, res) => {
//   res.send("Hello from DALL-E!");
// });

// router.route("/").post(async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     // fetching img from openai api
//     const aiResponse = await openai.createImage({
//       prompt,
//       n: 1,
//       size: "1024x1024",
//       response_format: "b64_json",
//     });

//     const image = aiResponse.data.data[0].b64_json;

//     // send to frontend
//     res.status(200).json({ photo: image });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .send(error?.response.data.error.message || "Something went wrong");
//   }
// });

// export default router;

// import { Leap } from "@leap-ai/sdk";
// import express from "express";
// import dotenv from "dotenv";
// dotenv.config();

// const leap = new Leap(process.env.LEAP_API_KEY);

// const router = express.Router();

// router.route("/").post(async (req, res) => {
//   const prompt = req.body;

//   try {
//     //stable diffusion 1.5
//     leap.usePublicModel("sd-1.5");

//     //generate the image by passing in the prompt, using leap SDK
//     const response = await leap.generate.generateImage({
//       prompt: prompt,
//     });
//     const imageUrl = response.data.images[0].uri;

//     //send JSON response to front end, with the data being the image in this case
//     res.status(200).json({ photo: image });
//     // res.status(200).json({
//     //   success: true,
//     //   data: imageUrl,
//     // });
//   } catch (error) {
//     console.log(error);
//     //send error to front end, so user can easily see that something went wrong
//     res.status(400).json({
//       success: false,
//       error: "The image could not be generated",
//     });
//   }
// });

// // app.listen(port);
// // console.log(`Running on localhost:${port}`);
// export default router;

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
