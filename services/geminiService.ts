
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the "Road Hills" Luxury Hotel Virtual Concierge.
Your tone is sophisticated, welcoming, and helpful.
You provide information about:
- Room types (Suites, Deluxe, Presidential Villa, Garden Studios).
- Amenities (Infinity pool, organic spa, nature trails).
- Local activities (hill hiking, vineyard tours nearby, stargazing).
- Booking policies (Check-in 2 PM, Check-out 11 AM).

If asked about pricing:
- Studios start at $280.
- Deluxe starts at $320.
- Suites start at $450.
- Presidential starts at $1200.

Keep responses concise but luxurious. Use markdown for lists.
`;

export const getConciergeResponse = async (history: ChatMessage[]) => {
  try {
    const contents = history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.8,
        topK: 40
      }
    });

    return response.text || "I'm sorry, I couldn't process that. How else can I assist your stay at Road Hills?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The mountains are calling, but my connection is faint. How can I help you manually?";
  }
};
