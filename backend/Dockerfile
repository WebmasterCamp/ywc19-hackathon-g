FROM node:16.15.0-alpine


WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .
RUN yarn build

ENV PORT 3000

CMD [ "yarn", "start" ]
