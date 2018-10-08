#!/bin/bash

#Installing Yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

#Installing extra npm packages
yarn
yarn add redux react-redux
yarn add --dev redux-devtools-extension
yarn add axios

#Install extra packages
sudo npm install -g semantic-ui-react
sudo npm install -g react-router-dom
sudo npm install -g react-bootstrap-table
sudo npm install -g prop-types
sudo npm install -g react-redux
sudo npm install -g react-md-spinner
sudo npm install -g react-router-dom