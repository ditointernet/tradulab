FROM node:12-stretch
ENV TRADULAB /usr/src/tradulab
WORKDIR $TRADULAB/web/
COPY package*.json $TRADULAB/web/
RUN npm ci
COPY . $TRADULAB/web/
