FROM node:14.15-slim
WORKDIR /usr/app

COPY ./packages ./packages
COPY ./services/node-service ./services/node-service
COPY ./package.json .
COPY ./lerna.json .
COPY tsconfig.json .
COPY jest.config.js .
COPY .env.example .env

RUN npm install
RUN npm run bootstrap
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
