FROM node:12-stretch
WORKDIR /usr/src/tradulab/process-input-file
COPY ./*.json .
COPY ./lib .
RUN npm install
EXPOSE 3001
CMD [ "npm", "start" ]
