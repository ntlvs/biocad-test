FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npm run db:deploy && npm start"]