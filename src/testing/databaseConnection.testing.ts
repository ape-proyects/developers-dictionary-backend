import { PrismaClient } from '@prisma/client'
const prisma: PrismaClient = new PrismaClient()

const getDatabaseConnection = (): PrismaClient => {
    return prisma
}

const closeDatabaseConnection = async (): Promise<void> => {
    await prisma.$disconnect()
}

export { getDatabaseConnection, closeDatabaseConnection }