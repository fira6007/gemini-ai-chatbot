import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";
configDotenv();

export default async function ask(question) {
  // The client gets the API key from the environment variable `GEMINI_API_KEY`.
  const ai = new GoogleGenAI({
    apiKey:
      process.env.GEMINI_API_KEY,
  });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: question }] }],
    });
    // console.log(response.candidates[0].content.parts[0].text);
    //   console.dir(response, { depth: Infinity });
    return response.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error:", error.message);
    return error;
  }
}
