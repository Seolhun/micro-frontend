#!/usr/bin/env bash

set -e

buildTarget() {
    if [ ! -z "$TRAVIS_TAG" ] || [ "$TRAVIS_BRANCH" == "master" ]; then
        target="production"
    elif [ "$TRAVIS_BRANCH" == "develop" ]; then
        target="development"
    fi
}

if [ -z "$TRAVIS_PULL_REQUEST" ] || [ "$TRAVIS_PULL_REQUEST" == "false" ]; then

    buildTarget

    if [ ! -z "$target" ]; then
        docker login -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD"

        if [ "$target" == "production" ]; then
            IGNORED_LEGAL_SERVICE_VALUE=true
        elif [ "$target" == "development" ]; then
            IGNORED_LEGAL_SERVICE_VALUE=false
        fi

        docker build --build-arg IGNORED_LEGAL_SERVICE_VALUE=$IGNORED_LEGAL_SERVICE_VALUE .
    fi

    # Push the Docker Image
    if [ ! -z "$TRAVIS_TAG" ]; then
        docker tag $DOCKER_REPO $DOCKER_REPO:$TRAVIS_TAG
        docker push $DOCKER_REPO:$TRAVIS_TAG

        curl --fail --request POST \
            --url $DEPLOY_SERVICE_URL/deploy/banksalad-web/production/$TRAVIS_TAG \
            --header "cd-deploy-key: $DEPLOY_KEY" \
            -d ""
    fi

    if [ "$TRAVIS_BRANCH" == "master" ]; then
        docker tag $DOCKER_REPO $DOCKER_REPO:latest
        docker push $DOCKER_REPO:latest
    elif [ "$target" == "development" ]; then
        develop_tag=develop-$TRAVIS_COMMIT

        docker tag $DOCKER_REPO $DOCKER_REPO:$develop_tag
        docker push $DOCKER_REPO:$develop_tag

        docker tag $DOCKER_REPO $DOCKER_REPO:canary
        docker push $DOCKER_REPO:canary

        curl --fail --request POST \
            --url $DEPLOY_SERVICE_URL/deploy/banksalad-web/development/$develop_tag \
            --header "cd-deploy-key: $DEPLOY_KEY" \
            -d ""
    fi
fi
