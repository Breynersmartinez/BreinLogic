const API_KEY = import.meta.env.VITE_API_KEY;
export const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;