FROM node:18

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Exponer puerto dev
EXPOSE 3000

CMD ["npm", "start"]
