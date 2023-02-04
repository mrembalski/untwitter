FROM node:18.13.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "dist/users/main.js" ]
