import { closeDatabaseConnection, getDatabaseConnection } from '../../testing/databaseConnection.testing'
import { PrismaClient, Solution, Error } from '@prisma/client'

let prisma: PrismaClient

beforeAll(async () => {
    prisma = await getDatabaseConnection()
})

beforeEach(async () => {
    await prisma.solution.deleteMany({})
})

describe('Solution model', () => {
    test('is saved without error', async () => {
        const solution: Solution =
            {
                text: '',
                link: '',
                images: ['', ''],
            } as Solution

        const solutionSaved = await prisma.solution.create({
            data: {
                ...solution
            }
        })

        const error: Error =
            {
                title: '',
                description: '',
                log: '',
                images: ['', ''],
                userId: '',
            } as Error

        await prisma.solution.update({
            where:
            {
                id: solutionSaved.id
            },
            data: {
                error: {
                    create: error
                },
            }
        })
    })

})

afterAll(async () => {
    await closeDatabaseConnection()
})