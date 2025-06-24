# --- Etapa 1: Construcción ---
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Usamos npm ci para una instalación más rápida y segura en CI
RUN npm ci
COPY . .

# --- Etapa 2: Producción ---
FROM node:18-alpine
WORKDIR /app
# Copia solo los artefactos necesarios de la etapa anterior
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./
EXPOSE 3000
# Comando para iniciar la app en producción
CMD [ "node", "app.js" ]