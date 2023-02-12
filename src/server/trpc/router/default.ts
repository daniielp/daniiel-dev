import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const defaultRouter = router({
  email: publicProcedure.query(() => {
    return {
      message: "dp@daniiel.dev"
    }
  }),
});
