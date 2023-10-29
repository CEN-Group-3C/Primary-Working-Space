FROM node:20-bookworm AS setup
LABEL maintainer="Isaac Hunter, web@ikehunter.dev"

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
COPY ./index.html /app/index.html
COPY ./vite.config.js /app/vite.config.js

WORKDIR /app

RUN npm install

COPY ./src /app/src

RUN npm run build

EXPOSE 5173
VOLUME /app/dist

CMD ["npm", "run", "dev"]





