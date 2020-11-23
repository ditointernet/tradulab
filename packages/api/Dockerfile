<<<<<<< HEAD
FROM node:12-stretch
WORKDIR /usr/src/tradulab/api
COPY ./package*.json ./
COPY ./lib ./
=======
FROM node:latest
WORKDIR /usr/src/tradulab/api
COPY ./package*.json ./
<<<<<<< HEAD
>>>>>>> Create API and WEB Images
=======
COPY ./lib ./
>>>>>>> Add Volume
RUN npm install
EXPOSE 3001
CMD [ "npm", "start" ]
COPY . .
