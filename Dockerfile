FROM node:18-alpine

# Create app directory
RUN mkdir -p /var/www/dockerize-nuxt/nuxt-app
WORKDIR /var/www/dockerize-nuxt/nuxt-app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

ENV NODE_ENV=production

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=80

CMD [ "npm", "start" ]
