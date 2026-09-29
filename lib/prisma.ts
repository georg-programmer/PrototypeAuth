import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Globale Variable um in der Entwicklung nur eine Prisma-Instanz zu halten
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Erstellt einen neuen Prisma-Client mit PostgreSQL-Adapter
function createPrismaClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  return new PrismaClient({ adapter });
}

// Singleton: bestehende Instanz wiederverwenden oder neue erstellen
export const prisma = globalForPrisma.prisma ?? createPrismaClient();

// In Entwicklung: Instanz global speichern, damit Hot-Reload keine neuen Verbindungen öffnet
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
