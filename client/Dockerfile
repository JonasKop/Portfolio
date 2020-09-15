# Stage 0 - Building
FROM node:alpine3.11 as setup-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY next-env.d.ts tsconfig.json .babelrc ./
COPY src ./src
COPY public ./public

# Stage 1 - Linting and formatting
FROM node:alpine3.11 as test-stage
WORKDIR /app
COPY --from=setup-stage /app/ ./
RUN ["yarn", "lint:check"]
RUN ["yarn", "format:check"]
#RUN ["yarn", "test"]

FROM node:alpine3.11 as build-stage
WORKDIR /app
COPY --from=setup-stage /app/ ./
RUN yarn build

# Stage 3 - Production
FROM node:alpine3.11 as prod-stage
ENV NODE_ENV=production

WORKDIR /app
COPY --from=build-stage /app/package.json /app/yarn.lock ./
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/public ./public
COPY --from=build-stage /app/node_modules ./node_modules
RUN ["yarn", "install", "--production"]
CMD ["yarn", "start"]
