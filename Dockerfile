from ubuntu:latest
MAINTAINER Francois Dazan


RUN apt-get update && apt-get -y install curl git vim sudo wget apache2 && apt-get clean
RUN curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
RUN apt-get -y install nodejs

RUN mkdir -p /var/www/html
COPY front-angular /var/www/html
WORKDIR /var/www/html
RUN npm install && npm install gulp -g
RUN gulp prod
RUN cp /etc/apache2/sites-enabled/000-default.conf /etc/apache2/sites-enabled/000-default.conf.old && \
    sed -i 's#/var/www/html#/var/www/html/build#g' /etc/apache2/sites-enabled/000-default.conf
    
EXPOSE 80
EXPOSE 443

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]