<<<<<<< HEAD
FROM node:12-stretch
=======
FROM node:latest
>>>>>>> Create API and WEB Images
WORKDIR /usr/src/tradulab/web
COPY ./package*.json ./
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
COPY . .