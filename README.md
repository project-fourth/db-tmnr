# Welcome to db-tmnr

I'm guessing you're wondering about the name...\
Well, it's a database management application, hence, the "db" prefix.
The "tmnr" suffix just denotes that it's built with Node, TRPC, React and MongoDB, among other technologies.\
Okay, enough with chit-chat. Move over to the next section to set up the project in your local environment.

## Setting up

In your local environment:

1. Clone this repository.
2. Execute the terminal command `npm run install-all` from the repo root directory.

## Development

1. To work on the client, execute the command `npm run dev` from the [db-tmnr-client](db-tmnr-client) directory to start the frontend dev server and start developing.
2. To work on the server, execute the command `npm run dev` from the [db-tmnr-server](db-tmnr-server) folder to start the backend dev server and start developing.
3. To work on both the client and the server simultaneously, execute the command `npm run dev-all` from the repo root directory and start developing.
4. From the [db-tmnr-client](db-tmnr-client) folder, run `npm run build` and `npm run preview` to build and preview the client respectively.
5. From the [db-tmnr-server](db-tmnr-server) folder, run `npm run build` and `npm start` to build and start/preview the server respectively.
6. From the repo root, run `npm run build-all` and `npm run preview-all` to respectively build both the client and server or preview them.

**Note: Any JS/TS module created in the `src` folder should be imported with the ".js" extension.**
