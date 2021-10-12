import { closeDatabaseConnection, getDatabaseConnection } from "../../testing/databaseConnection.testing"
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient

beforeAll(async () => {
    prisma = await getDatabaseConnection()
})

beforeEach(async () => {
    await prisma.solution.deleteMany({})
})

describe('Solution model', () => {
    test('is saved without error', async () => {
        await prisma.solution.create({
            data:{
                text: '',
                link: '',
                images: ['', ''],
                error: {
                    create: {
                        title: '',
                        description: '',
                        log: '',
                        images: ['', ''],
                        userId: '',
                    }
                }
            }
        })
    })

})

afterAll(async () => {
    await closeDatabaseConnection()
})