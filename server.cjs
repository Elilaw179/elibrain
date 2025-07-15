



// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const fetch = require('node-fetch');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post('/api/chat', async (req, res) => {
//   console.log('🟢 Received messages:', req.body.messages);

//   try {
//     const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//         'HTTP-Referer': 'http://localhost:5173',
//         'X-Title': 'eliAI Chat App',
//       },
//       body: JSON.stringify({
//         model: 'mistralai/mistral-7b-instruct:free',
//         messages: req.body.messages,
//       }),
//     });

//     const data = await response.json();
//     console.log('🔍 Full OpenRouter response:', JSON.stringify(data, null, 2));

//     const reply = data.choices?.[0]?.message?.content;
//     if (!reply) {
//       return res.status(500).json({ error: 'No reply from OpenRouter.' });
//     }

//     res.json({ reply });
//   } catch (err) {
//     console.error('❌ OpenRouter Error:', err);
//     res.status(500).json({ error: 'Failed to get response from OpenRouter' });
//   }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });







const express = require('express');
const cors = require('cors');
require('dotenv').config();
const fetch = require('node-fetch');
const { AbortController } = require('abort-controller');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const recentMessages = req.body.messages.slice(-4);
  console.log('🟢 Received messages:', recentMessages);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000); // 20 seconds timeout

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'http://localhost:5173',
        'X-Title': 'eliAI Chat App',
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-7b-instruct:free',
        messages: recentMessages,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    const data = await response.json();
    console.log('🔍 Full OpenRouter response:', JSON.stringify(data, null, 2));

    const reply = data.choices?.[0]?.message?.content;
    if (!reply) {
      return res.status(500).json({ error: 'No reply from OpenRouter.' });
    }

    res.json({ reply });
  } catch (err) {
    clearTimeout(timeout);
    console.error('❌ OpenRouter Error:', err);
    res.status(500).json({ error: 'Failed to get response from OpenRouter' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
