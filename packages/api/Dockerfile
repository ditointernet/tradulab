<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Create API and WEB Images
=======
>>>>>>> fix docker-file
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
RUN npm install
EXPOSE 3001
CMD [ "npm", "start" ]
COPY . .
=======
FROM node:latest
=======
FROM node:12-stretch
>>>>>>> fix docker-file
WORKDIR /usr/src/tradulab/api
COPY ./package*.json ./
COPY ./lib ./
RUN npm install
EXPOSE 3001
CMD [ "npm", "start" ]
COPY . .
>>>>>>> Create API and WEB Images
