#!/usr/bin/env bash

#Use PM2 to start in daemonzised mode
pm2 start yarn --name dspace-web-dev -- start:dev
