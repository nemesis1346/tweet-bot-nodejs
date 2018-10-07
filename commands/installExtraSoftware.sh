#!/bin/bash

#Install nodejs
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install nodejs
sudo apt-get install build-essential

#Install yarn
sudo apt-get install curl
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

#Install packages
sudo npm install -g create-react-app
sudo npm install -g --save-dev babel-plugin-transform-object-rest-spread babel-plugin-transform-react-jsx-source babel-preset-expo jest-expo flow-bin react-native-scripts react-test-renderer@16.2.0
sudo npm install -g --save expo@^25.0.0 react-native@0.52.0 react-native-web