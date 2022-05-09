FROM node:14.18.2

WORKDIR /usr/src/phoneword-converter

COPY package*.json . yarn.lock ./
RUN yarn && yarn cache clean

COPY . .

RUN yarn build

CMD ["yarn", "start"]