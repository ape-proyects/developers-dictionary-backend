import { Repository } from "typeorm"
import { closeDatabaseConnection, getDatabaseConnection } from "../../testing/databaseConnection.testing"
import File from "./file.entity"

let databaseConnection
let fileRepository: Repository<File>

beforeAll(async () => {
    databaseConnection = await getDatabaseConnection()
    fileRepository = databaseConnection.getRepository(File)
})

describe('Solution model', () => {
    test('is saved without error', async () => {
        await fileRepository.save(new File(''))
    })
})

afterAll(async () => {
    await closeDatabaseConnection()
})