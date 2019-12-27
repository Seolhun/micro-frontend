# Next.js TypeScript mircro project template

[![Build Status](https://travis-ci.com/Seolhun/micro-next.svg?token=5xc2cpwdTL4RZzhfYDZ9&branch=master)](https://travis-ci.com/Seolhun/micro-next)

## Requirements

- NodeJS > 10
- Docker

## Options

- Docker hub
  - These images are stored in here
- Travis CI
  - These images are pushed into docker hub using Travis CI

## Mirceo Apps Hierarchy

- `LoadBalancer - Ingress Nginx`
  - 80 port
  - 443 port
  - `API-Gateway - Nginx`
    - 3080 port
    - `API-Gateway` app
      - 3000 port
  - Clients
    - `Home - Nginx`
      - 4080 port
      - `Home` app
        - 4000 port
    - `Communities - Nginx`
      - 5080 port
      - `Communities` app
        - 5000 port

## How to

### Build

```
yarn build
```

### Docker

```
docker-compose up -d
```
