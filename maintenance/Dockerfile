FROM node:18.12.1

RUN mkdir -p /usr/src/maintenance

WORKDIR /usr/src/maintenance

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8001

CMD ["npm", "run", "build:start"]