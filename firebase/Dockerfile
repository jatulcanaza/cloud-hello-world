# Usar imagen oficial de Node.js 18 Alpine
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY public ./public
COPY server.js ./

# Exponer puerto
EXPOSE 5000

# Variable de entorno
ENV PORT=5000

# Comando para servir la aplicación localmente
CMD ["node", "server.js"]
