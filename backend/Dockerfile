FROM ruby:3.0.2-bullseye
RUN apt-get update -qq \
    && apt-get install -yq --no-install-recommends \
    build-essential \
    nodejs \
    postgresql-client \
    good_job:scheduler

WORKDIR /backend

