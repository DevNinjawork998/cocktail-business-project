import path from "node:path";
import { defineConfig } from "prisma/config";

// Determine the database URL based on environment
const getDatabaseUrl = () => {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }
  // Default to SQLite for development
  return "file:./dev.db";
};

export default defineConfig({
  schema: path.join(__dirname, "schema.prisma"),
  datasource: {
    url: getDatabaseUrl(),
  },
});

