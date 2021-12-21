FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR usr/src/app
COPY . .
RUN yarn install --production
CMD ["yarn", "start"]