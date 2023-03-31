FROM node:latest

WORKDIR C:\Users\saisi\Downloads\nodeapp_test-master

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4000
CMD [ "node", "index.js" ]
