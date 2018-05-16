FROM node:7.7.2-alpine

WORKDIR /usr/app

RUN apk --no-cache add \
    # Install ffmpeg for video recording:
    ffmpeg \
    # Install curl to wait for the server to be ready:
    curl