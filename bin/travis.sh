#!/bin/bash
set -e

# go to javascript folder
cd javascript

# run installation
npm ci

# run tests
npm run test