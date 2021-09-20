import { createConnection, getConnection, Connection } from 'typeorm'
import DatabaseConfigTesting from '../config/database.config.testing';

const getDatabaseConnection = async (): Promise<Connection> => {
    await createConnection(DatabaseConfigTesting)
    return getConnection()
}

const closeDatabaseConnection = async (): Promise<void> => {
    await getConnection().close()
}

export { getDatabaseConnection, closeDatabaseConnection }