# Next.js TypeScript mircro project template

## Mirceo Apps Hierarchy
- `Nginx` Router handler
	- 80 port
  - `ELB` proxy express
    - 3000 port
    - `Home` next app
      - 4000 port
    - `Notice` next app
      - 5000 port

## How to

### Build

```
yarn build
```

### Docker

```
docker-compose up
```
