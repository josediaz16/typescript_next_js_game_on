FROM node:12.16.1-slim

RUN apt-get update && apt-get install -y curl \
    gpg && \
    rm -rf /var/lib/apt/lists/*

#Update Yarn
RUN curl --compressed -o- -L https://yarnpkg.com/install.sh | bash

# Install psql
RUN curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
RUN echo "deb http://apt.postgresql.org/pub/repos/apt $(cat /etc/*release | grep  VERSION_CODENAME | awk -F '=' '{print $2}')-pgdg main" > /etc/apt/sources.list.d/pgdg.list
RUN apt-get update && apt-get install postgresql-client-11 -y && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir /game_on
WORKDIR /game_on
ENTRYPOINT ["./docker-entrypoint.sh"]
