FROM node:12-stretch
WORKDIR /usr/src/tradulab/api
COPY ./package*.json ./
COPY ./lib ./
RUN npm install
EXPOSE 3001
CMD [ "npm", "start" ]
COPY . .