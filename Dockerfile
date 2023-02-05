FROM node:18-alpine

# Create app directory
RUN mkdir -p /var/www/dockerize-nuxt/nuxt-app
WORKDIR /var/www/dockerize-nuxt/nuxt-app

# Install app dependencies
COPY ./package*.json /var/www/dockerize-nuxt/nuxt-app
RUN npm install

# Set environment variables
ENV NODE_ENV production
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 80

# Bundle app source
COPY . /var/www/dockerize-nuxt/nuxt-app
RUN npm run build

EXPOSE 80
CMD npm run start