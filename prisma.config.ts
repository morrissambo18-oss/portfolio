import path from "node:path";
import { defineConfig } from "prisma/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  datasource: {
    url: process.env.DATABASE_URL ?? "",
  },
  migrate: {
    async adapter(env: Record<string, string | undefined>) {
      const url = env["DATABASE_URL"] ?? process.env.DATABASE_URL;
      const pool = new Pool({ connectionString: url });
      return new PrismaPg(pool);
    },
  },
} as any);
