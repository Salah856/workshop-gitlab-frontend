FROM node:10.12.0-stretch

ARG PROXY
ARG PROXYS

RUN apt-get update \
    && apt-get install -y git \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*; \
    if [ -n "$PROXY" ] && [ -n "$PROXYS" ]; then \
        npm config set proxy "$PROXY" ;\
        npm config set https-proxy "$PROXYS" ;\
    fi; \
    npm install -g typescript @angular/cli

WORKDIR "/application"

EXPOSE 4200

CMD [ "tail", "-f", "/dev/null" ]
