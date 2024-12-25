FROM node:20.11.1-slim As development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

FROM node:20.11.1-slim as production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build