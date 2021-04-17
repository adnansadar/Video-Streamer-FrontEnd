# Video Streamer Front End with React
[Link](https://github.com/adnansadar/VideoStreamer-Backend) for BackEnd of this project
[Link](https://github.com/adnansadar/VideoStreamer-NodeMediaServer] for Node Media Server

https://user-images.githubusercontent.com/45177064/115114115-3ad20b00-9fab-11eb-8eb7-b62c19088a56.mp4

## About the Project

This project Designed using ReactJS, it makes use of Redux Store to maintain the app state. The user has an option to create a video stream, edit, delete a stream depending on whether the user is logged into the app.
Navigation between different pages has been done using React Router, OAuth based Authetication is done for logging in, Redux forms have been used for creating streams, a local json server is used which will load all our streams stored in db.json locally.
Node Media Server npm package is used for live streaming in our app and also to connect to Open Broadcaster Software which will be setup for streaming.

    

## Available Scripts

### `yarn install`

Installs all the dependencies of the project.
If you don't have yarn installed, you can run the command `npm install --global yarn`. To download NodeJS on your system if you already don't have it installed, you can download it from [here](https://nodejs.org/en/).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

