import { prisma } from "@/utils/prisma";
import { procedure, router } from "./../../trpc";
import { z } from "zod";
export const userRouter = router({
  create: procedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { email, name } = opts.input;
      const result = await prisma.user.create({
        data: {
          email,
          name,
        },
      });
      return result;
    }),
  getAll: procedure.query(async () => {
    return await prisma.user.findMany();
  }),
});
