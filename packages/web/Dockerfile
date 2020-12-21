FROM node:12-stretch
WORKDIR /usr/src/tradulab/web
COPY ./package*.json ./
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
COPY . .