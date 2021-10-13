import { PrismaClient, Error, Tag, TagType } from '@prisma/client'
import { closeDatabaseConnection, getDatabaseConnection } from '../../testing/databaseConnection.testing'

let prisma: PrismaClient

beforeAll(async () => {
    prisma = await getDatabaseConnection()
})

beforeEach(async () => {
    await prisma.error.deleteMany({})
})

describe('Solution model', () => {
    test('is saved without error', async () => {
        const error: Error =
            {
                title: '',
                description: '',
                log: '',
                images: ['', ''],
                userId: '',
            } as Error

        const errorSaved = await prisma.error.create({
            data: error
        })

        const tag: Tag =
            {
                name: '',
                type: TagType.architecture,
                userId: ''
            } as Tag

        await prisma.error.update({
            where:
            {
                id: errorSaved.id
            },
            data: {
                tags: {
                    create: [tag, tag]
                },
            }
        })
    })
})

afterAll(async () => {
    await closeDatabaseConnection()
})