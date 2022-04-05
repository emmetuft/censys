# Running Censys project on a local machine

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
We are using the GeoLite2-City-Blocks-IPv4 csv file obtained from https://dev.maxmind.com/geoip/geoip2/geolite2/ as our data source.
This file is too large to be stored in a GitHub repository, so you will need to download the file locally and add it to the /public folder.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

We are using docker-composer to containerize the app, and as such, we will use docker commands to build and run the app.
Be sure to run `npm install` prior to running docker commands to ensure all necessary dependencies are installed.
In the project directory, you can run:

### `docker build -t censys .`

Builds a docker image, which contains a set of instructions to build the docker container.
Afterwards, run the command:

### `docker-compose up`

To run the application. As configured in the docker-compose.yml file, the app will be running on port 3000.
These two commands can be consolidated using the following command:

### `docker-compose up --build`

The page will reload when you make changes.\
You may also see any lint errors in the console.
