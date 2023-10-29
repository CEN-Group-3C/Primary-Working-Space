FROM node:20-bookworm
LABEL maintainer="Isaac Hunter, web@ikehunter.dev"

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm install

COPY ./src /app/src

EXPOSE 3000

CMD ["npm", "start"]
