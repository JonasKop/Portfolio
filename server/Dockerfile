# Building base
FROM node:alpine3.11 as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY index.js ./

# Testing, linting and checking formatting
FROM build as unit
RUN echo linting
RUN echo formatting
COPY test/unit ./test
RUN yarn jest --ci

# Integration tests
FROM build as integration
COPY test/integration ./test
CMD ["yarn", "jest", "--ci"]

# Production
FROM unit-test as production
RUN yarn install --production --ignore-scripts --prefer-offline
CMD ["yarn", "start"]
