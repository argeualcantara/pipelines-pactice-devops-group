FROM node:lts
WORKDIR /app

COPY . /app
RUN npm install

EXPOSE 8080

CMD node /app/index.js
