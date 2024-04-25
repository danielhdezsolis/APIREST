FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install nodemon -g

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
