<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
FROM node:12-stretch
WORKDIR /usr/src/tradulab/api
COPY ./package*.json ./
COPY ./lib ./
=======
FROM node:latest
=======
FROM node:12-stretch
>>>>>>> fix docker-file
WORKDIR /usr/src/tradulab/api
COPY ./package*.json ./
<<<<<<< HEAD
>>>>>>> Create API and WEB Images
=======
COPY ./lib ./
>>>>>>> Add Volume
=======
FROM node:latest
WORKDIR /usr/src/tradulab/api
COPY ./package*.json ./
>>>>>>> Create API and WEB Images
RUN npm install
EXPOSE 3001
CMD [ "npm", "start" ]
COPY . .
