#!/bin/bash

# Stop all servers and start the server as a daemon
forever stopall
forever start /root/nestjs/src/main.ts