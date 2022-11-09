#!/bin/bash

if [ $PRODUCTION = true ];
then
    npm run build
    serve -s build
else
    npm run start
fi