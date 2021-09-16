import connectToDatabase from './databaseConnection'
import DatabaseConfigTesting from './config/database.config.testing';

describe('Database connection', () => {
    test('Uses DatabaseConfigTesting in testing env', async () => {
        const connection = await connectToDatabase()
        expect(connection.options).toBe(DatabaseConfigTesting)
        await connection.close()
    })
})