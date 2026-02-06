import express from 'express'
import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

const app = express()
const port = 3000
const apiKey = process.env.GOOGLE_API_KEY

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/send', async (req, res) => {
    try {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: "Tell me a short joke",
        });
        res.send(response.text);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})


app.listen(port, () => {
  console.log(`\n✅ Example app listening on port ${port}`)
  console.log('🛜 https://localhost:3000')
})