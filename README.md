# Next.js TypeScript mircro project template

## Requirements
- NodeJS > 10
- Docker

## Options
- Docker hub
  - These images are stored in here
- Travis CI
  - These images are pushed into docker hub using Travis CI

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
docker-compose up -d
```

---


### Travis CI
Connect Travis CI with Github Repo

### Docker Hub
Set Username and Password in `Travis setting` and Change .travis.yml as your configuration.

---


## Kubenetes

### Pre-requirements
1. kubectl - [Link](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

```
brew install kubectl
```

2. VM - [Link](https://www.virtualbox.org/wiki/Downloads)
3. minukubes - [Link](https://minikube.sigs.k8s.io/docs/start/)

```
brew install minikube
minikube start
```

## Refs
- [Travis With Docker](https://docs.travis-ci.com/user/docker/)
