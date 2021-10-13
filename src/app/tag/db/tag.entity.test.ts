import { TagTypes } from './tag.entity'
import { closeDatabaseConnection, getDatabaseConnection } from '../../../testing/databaseConnection.testing'
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

beforeAll(async () => {
    prisma = await getDatabaseConnection()
})

beforeEach(async () => {
    await prisma.tag.deleteMany({})
})

describe('Tag model', () => {
    test('is saved without error', async () => {
        await prisma.tag.create({ 
            data: {
                name: '',
                type: TagTypes.ARCHITECTURE
            }
        })
    })
})

afterAll(async () => {
    await closeDatabaseConnection()
})