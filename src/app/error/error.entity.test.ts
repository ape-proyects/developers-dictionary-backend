import { TagTypes } from './../tag/db/tag.entity';
import { PrismaClient } from '@prisma/client'
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
        await prisma.error.create({
            data: {
                title: '',
                description: '',
                log: '',
                images: ['', ''],
                userId: '',
                tags: {
                    create: [
                        { name: '', type: TagTypes.ARCHITECTURE },
                        { name: '', type: TagTypes.ARCHITECTURE }
                    ]
                },
                solutions: {
                    create: [
                        { text: '', link: '', images: ['', ''] },
                        { text: '', link: '', images: '' }
                    ]
                }
            }
        })
    })
})

afterAll(async () => {
    await closeDatabaseConnection()
})