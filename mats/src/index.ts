import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

async function main() {
  console.log('dongers');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
