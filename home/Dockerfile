# Builder
FROM mhart/alpine-node:latest AS BUILDER
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

# Runner
FROM mhart/alpine-node:latest AS RUNNER
WORKDIR /app
COPY --from=builder ./app/package.json .
COPY --from=builder ./app/.next ./.next
COPY --from=builder ./app/static ./static
COPY --from=builder ./app/node_modules ./node_modules

EXPOSE 4000

CMD ["yarn", "start"]
