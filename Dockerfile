FROM node:lts-alpine

RUN mkdir -p /home/node/web/node_modules && chown -R node:node /home/node/web

WORKDIR /home/node/web

COPY package.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . .

EXPOSE 3000

CMD ["yarn", "start"]
