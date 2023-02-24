FROM node:14.15-slim

WORKDIR /usr/app

ENV CYPRESS_INSTALL_BINARY=0

COPY ./packages/components ./packages/components
COPY ./packages/web-app ./packages/web-app
COPY ./apps/starter-app ./apps/starter-app

COPY ["package.json", "package-lock.json", "lerna.json",  "tsconfig.json", "./"]

# install packages and perform build.
# note that npm run bootstrap calls npm install internally
RUN npm ci --production
RUN npm run bootstrap
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
