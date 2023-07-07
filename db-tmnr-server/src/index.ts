import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { z } from "zod";
import mongoose from "mongoose";
import express from "express";
import "dotenv/config";
import db, { User } from "./db.js";
import cors from "cors";

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({});

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();
const router = t.router;
const publicProcedure = t.procedure;

const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users = await db.User.find();

    return users;
  }),
  userByName: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    const user = await db.User.find().where({ name: input });

    return user;
  }),
  userCreate: publicProcedure
    .input(
      z.object({
        name: z.string(),
        age: z.number(),
        department: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await db.User.create<User>(input);

      return user;
    }),
});

const app = express();

app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

async function main() {
  await mongoose.connect(process.env.DB_CONNECTION_STRING!);
  app.listen("3000", () => console.log("Server don dey run oo!"));
}

main().catch((err) => console.log(err));

export type AppRouter = typeof appRouter;
