const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Heroku Hello World</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          text-align: center;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          max-width: 600px;
        }
        h1 {
          font-size: 3em;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        p {
          font-size: 1.2em;
          margin: 0.5rem 0;
          line-height: 1.6;
        }
        .emoji {
          font-size: 4em;
          margin-bottom: 1rem;
          display: block;
        }
        .tech-stack {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 2px solid rgba(255, 255, 255, 0.3);
        }
        .badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          margin: 0.3rem;
          border-radius: 20px;
          font-size: 0.9em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <span class="emoji">🚀</span>
        <h1>Hello World desde Heroku!</h1>
        <p>Desplegado con Docker y Node.js</p>
        <p><strong>Proyecto:</strong> Proveedores de Servicios en la Nube</p>
        <div class="tech-stack">
          <span class="badge">Node.js</span>
          <span class="badge">Express</span>
          <span class="badge">Docker</span>
          <span class="badge">Heroku</span>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.get('/api/info', (req, res) => {
  res.json({
    proyecto: 'Proveedores de Servicios en la Nube',
    proveedor: 'Heroku',
    tecnologias: ['Node.js', 'Express', 'Docker'],
    autor: 'Roddy Ortega',
    fecha: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Visit: http://localhost:${PORT}`);
});
