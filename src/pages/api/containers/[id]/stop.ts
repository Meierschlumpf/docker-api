import { getDockerInstance } from "@/helpers/instance";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query as { id: string };

  const docker = getDockerInstance();
  const container = docker.getContainer(id);
  if (!container) {
    return res.status(404).json({ message: "Container not found" });
  }

  try {
    await container.stop();
  } catch (e) {
    console.error("Unable to stop container " + id);
    console.error(e);
    return res.status(500).json({ message: "Unable to stop container" });
  }
  console.log(`Stopped container ${id} successfully`);
  return res.status(200).json({ message: "Stopped container successfully" });
}
