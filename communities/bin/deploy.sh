#!/usr/bin/env bash
set -e

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

DOCKER_REPO = "shooney/home-communities"

# https://docs.travis-ci.com/user/environment-variables/#default-environment-variables
if [ -z "$TRAVIS_PULL_REQUEST" ] || [ "$TRAVIS_PULL_REQUEST" == "false" ]; then

    # Push the Docker Image
    if [ ! -z "$TRAVIS_TAG" ]; then
        docker tag $DOCKER_REPO $DOCKER_REPO:$TRAVIS_TAG
        docker push $DOCKER_REPO:$TRAVIS_TAG
    fi

    if [ "$TRAVIS_BRANCH" == "master" ]; then
        docker tag $DOCKER_REPO $DOCKER_REPO:latest
        docker push $DOCKER_REPO:latest
    elif [ "$TRAVIS_BRANCH" == "develop" ]; then
        DEVELOP_TAG=develop-$TRAVIS_COMMIT

        docker tag $DOCKER_REPO $DOCKER_REPO:$DEVELOP_TAG
        docker push $DOCKER_REPO:$DEVELOP_TAG
    fi
fi