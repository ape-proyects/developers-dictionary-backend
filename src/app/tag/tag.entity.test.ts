import { Repository } from "typeorm"
import { closeDatabaseConnection, getDatabaseConnection } from "../../testing/databaseConnection.testing"
import { Tag } from "./tag.entity"

let databaseConnection
let solutionRepository: Repository<Tag>

beforeAll(async () => {
    databaseConnection = await getDatabaseConnection()
    solutionRepository = databaseConnection.getRepository(Tag)
})

describe('Tag model', () => {
    test('is saved without error', async () => {
        await solutionRepository.save(new Tag('', ''))
    })
})

afterAll(async () => {
    await closeDatabaseConnection()
})