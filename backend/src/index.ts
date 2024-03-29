import express, { Request, Response } from "express";

import { port } from "./config/env.config";
import prisma from "./utils/prima.config";
import route from "./routes";


async function mainLayer() {
  let app = express();
  app.use((express as any).json());
  await prisma.$connect();
  app.use("/api", route);
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}


mainLayer()
  .catch(async (e) => {
    console.error("got errorr-------", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
