import { closeDatabaseConnection, getDatabaseConnection } from '../../../testing/databaseConnection.testing'
import { PrismaClient, Tag, TagType } from '@prisma/client'

let prisma: PrismaClient

beforeAll(async () => {
    prisma = await getDatabaseConnection()
})

beforeEach(async () => {
    await prisma.tag.deleteMany({})
})

describe('Tag model', () => {
    test('is saved without error', async () => {
        const tag: Tag =
            {
                name: '',
                type: TagType.architecture,
                userId: ''
            } as Tag

        await prisma.tag.create({
            data: tag
        })
    })
})

afterAll(async () => {
    await closeDatabaseConnection()
})