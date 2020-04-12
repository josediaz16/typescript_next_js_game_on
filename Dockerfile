FROM node:12.16.1-slim

RUN apt-get update && apt-get install -y curl \
    gpg && \
    rm -rf /var/lib/apt/lists/*

#Update Yarn
RUN curl --compressed -o- -L https://yarnpkg.com/install.sh | bash

RUN mkdir /game_on
WORKDIR /game_on
ENTRYPOINT ["./docker-entrypoint.sh"]
