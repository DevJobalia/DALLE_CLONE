import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomIndex];

  // consequtive same prompt produced
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
