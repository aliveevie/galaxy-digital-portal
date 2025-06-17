import express from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4500;

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

// Chat endpoint - now handling real chat messages
app.post('/api/chat', (req, res) => {
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
    
    // Generate a response based on the message content
    let response = '';
    
    if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
      response = 'Hello! Welcome to Galaxy Digital Portal. How can I assist you today?';
    } else if (message.toLowerCase().includes('help')) {
      response = 'I\'m here to help! You can ask me about our services, pricing, or any other questions you might have.';
    } else if (message.toLowerCase().includes('service') || message.toLowerCase().includes('services')) {
      response = 'We offer a wide range of digital services including web development, mobile apps, digital marketing, and IT consulting. What specific service are you interested in?';
    } else if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
      response = 'Our pricing varies based on project requirements and scope. Would you like to schedule a consultation to discuss your specific needs?';
    } else if (message.toLowerCase().includes('contact') || message.toLowerCase().includes('reach')) {
      response = 'You can reach us through WhatsApp, email, or by calling our support line. I can also connect you with our team right now!';
    } else {
      response = 'Thank you for your message! One of our specialists will review your inquiry and get back to you shortly. Is there anything specific you\'d like to know about our services?';
    }
    
    // Return the response
    res.json({
      response: response,
      timestamp: new Date().toISOString(),
      messageId: Date.now().toString()
    });
    
  } catch (error) {
    console.error('❌ Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
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
  console.log(`💬 Chat endpoint available at http://localhost:${PORT}/api/chat`);
});
