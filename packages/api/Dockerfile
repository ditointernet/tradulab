FROM node:latest
WORKDIR /usr/src/tradulab/api
COPY ./package*.json ./
RUN npm install
EXPOSE 3001
CMD [ "npm", "start" ]
COPY . .
