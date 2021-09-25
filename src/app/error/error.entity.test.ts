import { Tag } from './../tag/tag.entity';
import { Repository } from "typeorm"
import { closeDatabaseConnection, getDatabaseConnection } from "../../testing/databaseConnection.testing"
import Error from "./error.entity"
import File from "../file/file.entity"

let databaseConnection
let errorRepository: Repository<Error>

const error = new Error('', '')

beforeAll(async () => {
    databaseConnection = await getDatabaseConnection()
    errorRepository = databaseConnection.getRepository(Error)
})

describe('Solution model', () => {
    test('is saved without error', async () => {
        await errorRepository.save(error)
    })

    test('images relation works', async () => {
        const image = new File('')
        error.addImage(image)
        await errorRepository.save(error)

        expect(error.images[0]).toBe(image)
    })

    test('logs relation works', async () => {
        const log = new File('')
        error.addLog(log)
        await errorRepository.save(error)

        expect(error.logs[0]).toBe(log)
    })

    test('tags relation works', async () => {
        const tag = new Tag('', '')
        error.addTag(tag)
        error.addTag(tag)
        await errorRepository.save(error)

        expect(error.tags[0]).toBe(tag)
    })
})

afterAll(async () => {
    await closeDatabaseConnection()
})