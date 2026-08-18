import { PrismaClient } from "../app/generated/prisma";

// Verhindert, dass im Development-Modus bei jedem Hot-Reload
// eine neue Datenbankverbindung geöffnet wird.
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
