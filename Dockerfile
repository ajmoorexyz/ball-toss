FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app/
RUN npm install

ADD . /usr/src/app

EXPOSE 1234
CMD [ "npm", "start" ]
