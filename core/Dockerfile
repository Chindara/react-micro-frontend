FROM node:18.12.1

RUN mkdir -p /usr/src/core

WORKDIR /usr/src/core

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "build:start"]