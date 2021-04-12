FROM node:12-stretch
ENV TRADULAB /usr/src/tradulab
WORKDIR $TRADULAB/api/
COPY package*.json $TRADULAB/api/
RUN npm ci
COPY . $TRADULAB/api/
