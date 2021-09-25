import { Repository } from "typeorm"
import { closeDatabaseConnection, getDatabaseConnection } from "../../testing/databaseConnection.testing"
import Solution from "./solution.entity"
import Error from '../error/error.entity'
import File from '../file/file.entity'

let databaseConnection
let solutionRepository: Repository<Solution>
let errorRepository: Repository<Error>

let solution: Solution

beforeAll(async () => {
    databaseConnection = await getDatabaseConnection()
    solutionRepository = databaseConnection.getRepository(Solution)
    errorRepository = databaseConnection.getRepository(Error)
})

describe('Solution model', () => {
    test('is saved without error', async () => {
        const error = new Error('', '')
        await errorRepository.save(error)
        solution = new Solution('', error)
        await solutionRepository.save(solution)
    })

    test('images relation works', async () => {
        const image = new File('')
        solution.addImage(image)
        await errorRepository.save(solution)

        expect(solution.images[0]).toBe(image)
    })
})

afterAll(async () => {
    await closeDatabaseConnection()
})