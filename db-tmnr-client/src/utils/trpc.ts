import type { AppRouter } from "../../../db-tmnr-server/src/index.ts";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
