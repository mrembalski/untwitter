FROM node:18.13.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

COPY ./src/front/views ./dist/front/views

CMD [ "node", "dist/front/main.js" ]
