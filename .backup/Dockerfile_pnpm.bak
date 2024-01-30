FROM node:18-alpine AS base

# Update the package index and install the required packages
RUN apk update && \
    apk add fuse3 openssl sqlite-libs sqlite-dev ca-certificates

RUN npm i -g pnpm

FROM base AS dependencies
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install

FROM base AS build
WORKDIR /app
COPY ./ .
COPY --from=dependencies /app/node_modules ./node_modules

ADD prisma .
RUN npx prisma generate

RUN pnpm typecheck && \
    npm run build
EXPOSE 3000
CMD ["pnpm", "run", "start"]

# RUN pnpm prune --prod
# FROM base AS deploy
# WORKDIR /app
# COPY --from=build /app/node_modules ./node_modules
