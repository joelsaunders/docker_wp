FROM node:7.7.4-alpine

WORKDIR /tmp
COPY ./package.json /tmp/
RUN npm install

RUN mkdir /code/
WORKDIR /code
COPY . /code/
RUN cp -a /tmp/node_modules /code/
RUN npm run build-prod
CMD ["npm", "start"]
EXPOSE 8000