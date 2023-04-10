# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Run below command to install dependencies required to run this project
```
npm install
``` 

## Setting up local DB & env file

This project contains `db.json` file which will mimic as a local db with initial data. This can be edited as per your need & data requirement.\
We are using [JSON server](https://www.npmjs.com/package/json-server) utility to create a fake REST api server. Install json server as a global dependency & run it using below commands
```
# install json-server
npm install -g json-server
# run json-server
json-server --watch db.json
```

### create .env file

create .env file at the root of your project directory & put json server url in below env variable.
```
REACT_APP_API_URL=http://localhost:3000
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint:check`

Check all the eslint & prettier errors. They will be listed down in your terminal.

### `npm run lint:fix`

This command will fix all the auto-fixable lint & prettier issues & list down remaining issues which needs to be solved by the developer him/her self.