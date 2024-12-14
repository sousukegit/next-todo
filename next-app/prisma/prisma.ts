import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // ログを有効にする（開発時のみ）
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
