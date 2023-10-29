FROM strapi:latest

COPY ./config /app/config
COPY ./public /app/public
COPY ./src /app/src
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm install && \
    npm run build

EXPOSE 1337

CMD ["npm", "start"]

