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
docker-compose up -d
```


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
