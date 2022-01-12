FROM node:17.3

WORKDIR /client

COPY package.json ./
RUN npm i

COPY .env ./
COPY src ./
COPY public ./

CMD ["npm", "run", "start"]