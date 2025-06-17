import express from 'express';
import dotenv from 'dotenv';
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4500;

// Initialize OpenAI with API key
const openai = createOpenAI({
  apiKey: process.env.OPEN_AI_KEY,
  compatibility: 'strict',
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Basic routes
app.get('/', (_req, res) => {
  res.json({ 
    message: 'Galaxy Digital Portal Server is running!',
    timestamp: new Date().toISOString(),
    status: 'active'
  });
});

app.get('/health', (_req, res) => {
  res.json({ 
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// AI Support Agent System Prompt
const SUPPORT_AGENT_PROMPT = `You are a professional customer support agent for Galaxy Digital Portal, a leading digital services company. 

COMPANY INFORMATION:
- Galaxy Digital Portal offers web development, mobile app development, digital marketing, IT consulting, and software solutions
- We serve clients across Africa and beyond
- Our services include: Custom web applications, Mobile apps (iOS/Android), Digital marketing campaigns, SEO optimization, Social media management, IT infrastructure setup, Cloud solutions, E-commerce platforms, and more

YOUR ROLE:
- Be friendly, professional, and helpful
- Provide accurate information about our services
- Help customers understand our offerings and pricing
- Guide customers to the right solutions for their needs
- Collect relevant information when needed
- Always maintain a positive, solution-oriented approach

RESPONSE GUIDELINES:
- Keep responses concise but informative (2-4 sentences)
- Be conversational and engaging
- Ask follow-up questions when appropriate
- If you don't have specific information, offer to connect them with our team
- Never make up pricing or specific technical details
- Always represent Galaxy Digital Portal professionally

When customers ask about pricing, explain that it varies based on project scope and requirements, and offer to schedule a consultation.

When customers ask about specific services, provide a brief overview and ask about their specific needs.`;

// Chat endpoint - now with AI-powered responses
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    // Console log the user input
    console.log('📨 Received chat message:', message);
    console.log('⏰ Timestamp:', new Date().toISOString());
    console.log('👤 User IP:', req.ip);
    console.log('🌐 User Agent:', req.get('User-Agent'));
    console.log('---');
    
    // Check if OpenAI API key is available
    console.log('🔑 API Key Status:', process.env.OPEN_AI_KEY ? '✅ Available' : '❌ Missing');
    if (!process.env.OPEN_AI_KEY) {
      console.error('❌ OpenAI API key not found in environment variables');
      return res.status(500).json({ 
        error: 'AI service temporarily unavailable. Please contact us directly.' 
      });
    }
    
    // Generate AI response using generateText function
    const { text: aiResponse } = await generateText({
      model: openai('gpt-3.5-turbo'),
      prompt: `${SUPPORT_AGENT_PROMPT}\n\nUser: ${message}\n\nAssistant:`,
      maxTokens: 300,
      temperature: 0.7,
    });
    
    console.log('🤖 AI Response:', aiResponse);
    console.log('---');
    
    // Return the AI response
    res.json({
      response: aiResponse,
      timestamp: new Date().toISOString(),
      messageId: Date.now().toString()
    });
    
  } catch (error) {
    console.error('❌ Error in chat endpoint:', error);
    
    // Fallback response if AI fails
    const fallbackResponse = 'Thank you for your message! I\'m having trouble processing your request right now. Please try again in a moment or contact us directly through our website.';
    
    res.json({
      response: fallbackResponse,
      timestamp: new Date().toISOString(),
      messageId: Date.now().toString()
    });
  }
});

// Simple 404 handler without problematic wildcard
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📊 Health check available at http://localhost:${PORT}/health`);
  console.log(`💬 AI Chat endpoint available at http://localhost:${PORT}/api/chat`);
  console.log(`🔑 OpenAI API Key: ${process.env.OPEN_AI_KEY ? '✅ Configured' : '❌ Missing'}`);
});
