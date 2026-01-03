import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { defaultBias } from "../data/defaultBias";
import { createClient } from "redis";

async function main() {
  if (!process.env.REDIS_URL) throw new Error("REDIS_URL missing in .env.local");

  const client = createClient({ url: process.env.REDIS_URL });
  await client.connect();

  await client.set("daily_bias", JSON.stringify(defaultBias));
  console.log("Bias seeded.");

  await client.quit();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});