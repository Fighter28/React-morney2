#!/usr/bin/env bash
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:Fighter28/React-morney-website2.git &&
git push -u origin main -f
cd -