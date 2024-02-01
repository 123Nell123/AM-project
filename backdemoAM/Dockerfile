
FROM node:lts-alpine3.19
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm ci
RUN apk --no-cache add curl
COPY ./app.js .
CMD node app.js
EXPOSE 3000
