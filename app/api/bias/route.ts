import { NextResponse } from "next/server";
import { createClient } from "redis";
import { defaultBias } from "@/app/data/defaultBias";

export async function GET() {
  const client = createClient({ url: process.env.REDIS_URL });
  await client.connect();

  const raw = await client.get("daily_bias");

  await client.quit();

  if (!raw) {
    return NextResponse.json(defaultBias);
  }

  return NextResponse.json(JSON.parse(raw));
}