const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'public', 'index.html');
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading page');
      return;
    }
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🔥 Firebase Hello World running on port ${PORT}`);
  console.log(`📍 Visit: http://localhost:${PORT}`);
});
