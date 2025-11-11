# Usar imagen oficial de Node.js 18 Alpine (ligera)
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias de producción
RUN npm install --production

# Copiar el código de la aplicación
COPY . .

# Exponer el puerto
EXPOSE 3000

# Variable de entorno por defecto
ENV PORT=3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
