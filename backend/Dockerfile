FROM node:18.12.1

RUN mkdir -p /usr/src/backend

WORKDIR /usr/src/backend

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "start:dev"]