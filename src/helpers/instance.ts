import { env } from "@/env";
import Docker from "dockerode";

let instance: Docker | null = null;

export const getDockerInstance = () => {
  if (!instance) {
    instance = new Docker({
      host: env.DOCKER_HOST,
      port: env.DOCKER_PORT,
    });
  }
  return instance;
};
