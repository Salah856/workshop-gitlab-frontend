FROM node:10.12.0-stretch

RUN apt-get update \
    && apt-get install -y git \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/* \
    && npm install -g typescript @angular/cli

WORKDIR "/application"

EXPOSE 4200

CMD [ "tail", "-f", "/dev/null" ]