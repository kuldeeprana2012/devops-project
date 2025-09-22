FROM node:18-alpine

WORKDIR /app

COPY package.json .
RUN npm install

# Copy all files, including public/
COPY . .

EXPOSE 3000
CMD ["node", "app.js"]
