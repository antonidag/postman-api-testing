FROM node:14-alpine3.16

EXPOSE 8080

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

CMD [ "node", "index.js"]