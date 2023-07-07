# Welcome to db-tmnr

I'm guessing you're wondering about the name...\
Well, it's a database management application, hence, the "db" prefix.
The "tmnr" suffix just denotes that it's built with Node, TRPC, React and MongoDB, among other technologies.\
Okay, enough with chit-chat. Move over to the next section to set up the project in your local environment.

## Setting up

In your local environment:

1. Clone this repository.
2. Execute the terminal command `npm install` from the repository root.

## Development

From the repository root:

1. To work on the client, execute the command `npm run dev:client` to start the frontend dev server and start developing.
2. To work on the server, execute the command `npm run dev:server` to start the backend dev server and start developing.
3. To work on both the client and the server simultaneously, execute the command `npm run dev` and start developing.
4. Run `npm run build:client` and `npm run preview:client` to build and preview the client respectively.
5. Run `npm run build:server` and `npm run preview:server` to build and preview the server respectively.
6. Run `npm run build` and `npm run preview` to respectively build both the client and server or preview them.
7. Run `npm run install:client` and `npm run install:server` to install dependencies on the the client and server respectively. Use "--"
to append packages and/or command line flags to the command. For eg. To execute `npm install -D tailwindcss` on the client, execute the
command `npm run install:client -- -D tailwindcss`.
8. Run `npm run on:client` and `npm run on:server` to run arbitrary commands on the the client and server respectively. Use "--"
to append commands and/or command line flags to the command. For eg. To execute `npx tailwindcss init -p` on the client, execute the
command `npm run on:client -- npx tailwindcss init -p`.

**Note: Any JS/TS module created in the `src` folder in [db-tmnr-server](./db-tmnr-server/) should be imported with the ".js" extension.**
