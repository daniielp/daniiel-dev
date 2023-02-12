import { router } from "../trpc";
import { exampleRouter } from "./example";
import { defaultRouter } from "./default";

export const appRouter = router({
  default: defaultRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
