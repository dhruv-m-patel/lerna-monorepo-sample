FROM node:14.17-slim
WORKDIR /usr/app

COPY ./service .

COPY ["package.json", "yarn.lock", "lerna.json",  "tsconfig.json", "jest.config.js"]

COPY .env.example .env

RUN yarn install --frozen-lockfile
RUN yarn bootstrap
RUN yarn build

EXPOSE 4000

CMD ["yarn", "start"]
