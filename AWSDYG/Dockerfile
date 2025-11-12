# Imagen de Node.js
FROM node:18

# Se crea y define el directorio de trabajo
WORKDIR /app

# Se copia los archivos del proyecto
COPY package*.json ./
RUN npm install

# Se copia el resto del código
COPY . .

# Se configura el puerto
EXPOSE 80

# Comando para iniciar el servidor
CMD ["node", "server.js"]
