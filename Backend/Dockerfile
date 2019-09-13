FROM node:10

WORKDIR /app/src

COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js

EXPOSE 4000