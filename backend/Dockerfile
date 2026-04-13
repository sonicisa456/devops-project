# Imagen base
FROM node:18

# Crear carpeta de trabajo
WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo
COPY . .

# Exponer puerto
EXPOSE 3000

# Ejecutar app
CMD ["node", "app.js"]