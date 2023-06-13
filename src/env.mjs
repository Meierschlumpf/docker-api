import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DOCKER_HOST: z.string().min(1),
    DOCKER_PORT: z
      .string()
      .regex(/^\d+$/)
      .transform((v) => parseInt(v, 10)),
  },
  client: {},
  runtimeEnv: {
    DOCKER_HOST: process.env.DOCKER_HOST,
    DOCKER_PORT: process.env.DOCKER_PORT,
  },
});
