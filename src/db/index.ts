import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export type Database = ReturnType<typeof createDb>;

/**
 * Builds a Drizzle client when DATABASE_URL is present.
 */
export function getDb(): Database | null {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  return createDb(url);
}

function createDb(url: string) {
  return drizzle(neon(url), { schema });
}

export { schema };
