import { PrismaClient } from "../app/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

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