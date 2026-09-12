import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const hashed = await bcrypt.hash("passwort123", 12);

  await prisma.user.upsert({
    where: {
      email: "Max.Mustymann@gmail.com",
    },
    update: {},
    create: {
      email: "Max.Mustymann@gmail.com",
      password: hashed,
      name: "Max",
    },
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());