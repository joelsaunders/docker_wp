FROM node:7.7.4

WORKDIR /tmp
COPY ./package.json /tmp/
RUN npm install

RUN mkdir /code/
WORKDIR /code
COPY . /code/
RUN cp -a /tmp/node_modules /code/

CMD ["npm", "start"]
EXPOSE 8000