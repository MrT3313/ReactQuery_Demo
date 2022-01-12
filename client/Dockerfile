FROM node:17.3

WORKDIR /client

COPY package.json ./
COPY package-lock.json ./

COPY . .

RUN npm i

CMD ["npm", "run", "start"]