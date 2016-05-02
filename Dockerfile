from ubuntu:latest
MAINTAINER Francois Dazan

RUN apt-get update
RUN apt-get install -y git
RUN apt-get -y install curl wget git g++ make python-dev build-essential apache2
RUN curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
RUN apt-get -y install nodejs

RUN mkdir -p /var/www/html
COPY front-angular /var/www/html
WORKDIR /var/www/html
RUN npm install
RUN npm install gulp -g
RUN gulp prod
