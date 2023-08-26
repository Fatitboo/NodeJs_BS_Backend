FROM node:20

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3001

CMD ["node","server"]

