FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install nodemon -g

RUN npm install express

RUN npm install

# Agregar el directorio node_modules/.bin al PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
