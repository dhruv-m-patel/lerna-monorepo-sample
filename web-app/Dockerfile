FROM node:14.17-slim

WORKDIR /usr/app

COPY ./web-app ./web-app

COPY ["package.json", "yarn.lock", "lerna.json",  "tsconfig.json", "./"]

COPY .env.example .env

# install packages and perform build.
RUN yarn install --frozen-lockfile
RUN yarn bootstrap
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
