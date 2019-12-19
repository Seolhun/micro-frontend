# Builder
FROM mhart/alpine-node:latest AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

# Runner
FROM mhart/alpine-node:latest AS runner
WORKDIR /app
COPY --from=builder ./app/.next .
COPY --from=builder ./app/node_modules ./node_modules

EXPOSE 5000
CMD ["yarn", "start"]
