FROM node:boron
WORKDIR /usr/src/app

COPY . .
RUN npm install

CMD [ "npm", "start" ]