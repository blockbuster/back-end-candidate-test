FROM node:10

WORKDIR /app/src

COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

CMD ["npm", "run", "start:server"]

EXPOSE 3000