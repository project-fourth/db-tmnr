import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { z } from "zod";
import db from "./db.js";
import express from "express";

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({});

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();
const router = t.router;
const publicProcedure = t.procedure;

const appRouter = router({
  userList: publicProcedure.query(() => {
    const users = db.userList;

    return users;
  }),
  userById: publicProcedure.input(z.string()).query((opts) => {
    const { input } = opts;
    const user = db.userById(input);

    return user;
  }),
  userCreate: publicProcedure
    .input(z.object({ id: z.string(), name: z.string(), age: z.number() }))
    .mutation((opts) => {
      const { input } = opts;
      const user = db.userCreate(input);

      return user;
    }),
});

const app = express();

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen("3000", () => console.log("Server don dey run oo!"));

export type AppRouter = typeof appRouter;
