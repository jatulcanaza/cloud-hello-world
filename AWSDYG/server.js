const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hello World</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #6dd5fa, #2980b9);
          color: white;
          text-align: center;
          height: 100vh;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        h1 {
          font-size: 3em;
          background: rgba(0,0,0,0.2);
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.2em;
          opacity: 0.9;
        }
      </style>
    </head>
    <body>
      <h1>🚀 Hello World desde EC2 con Docker y GitHub!</h1>
      <p>Creado con Node.js 💚</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
