# Welcome to db-tmnr

I'm guessing you're wondering about the name...\
Well, it's a database management application, hence, the "db" prefix.
The "tmnr" suffix just denotes that it's built with Node, TRPC, React and MongoDB, among other technologies.\
Okay, enough with chit-chat. Move over to the next section to set up the project in your local environment.

## Setting up

In your local environment:

1. Clone this repository.
2. Execute the terminal command `npm run install-all` from the repository root.

## Development

From the repository root:

1. To work on the client, execute the command `npm run dev-client` to start the frontend dev server and start developing.
2. To work on the server, execute the command `npm run dev-server` to start the backend dev server and start developing.
3. To work on both the client and the server simultaneously, execute the command `npm run dev-all` and start developing.
4. Run `npm run build-client` and `npm run preview-client` to build and preview the client respectively.
5. Run `npm run build-server` and `npm run preview-server` to build and preview the server respectively.
6. Run `npm run build-all` and `npm run preview-all` to respectively build both the client and server or preview them.

**Note: Any JS/TS module created in the `src` folder should be imported with the ".js" extension.**
