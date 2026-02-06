import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

const apiKey = process.env.GOOGLE_API_KEY
const ai = new GoogleGenAI({ apiKey });

async function run() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "",
  });

  console.log(response.text);
}

run();
