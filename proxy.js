// proxy.js — запускать командой: node proxy.js
// Проксирует запросы от браузера к api.anthropic.com, добавляя CORS-заголовки

const http = require('http');
const https = require('https');

const PORT = 3001;
const API_KEY = 'WRITE_YOUR_ANTHROPIC_API_KEY'; // ← ВСТАВЬТЕ СВОЙ КЛЮЧ СЮДА

const server = http.createServer((req, res) => {
  // CORS-заголовки — разрешают запросы из браузера
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Preflight-запрос браузера
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== 'POST' || req.url !== '/v1/messages') {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    const options = {
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Length': Buffer.byteLength(body),
      }
    };

    const proxyReq = https.request(options, proxyRes => {
      res.writeHead(proxyRes.statusCode, { 'Content-Type': 'application/json' });
      proxyRes.pipe(res);
    });

    proxyReq.on('error', err => {
      console.error('Proxy error:', err);
      res.writeHead(502);
      res.end(JSON.stringify({ error: err.message }));
    });

    proxyReq.write(body);
    proxyReq.end();
  });
});

server.listen(PORT, () => {
  console.log(`✅ Прокси запущен: http://localhost:${PORT}`);
  console.log(`   Откройте tasks.html через Live Server как обычно.`);
});
