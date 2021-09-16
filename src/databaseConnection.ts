import { Connection, createConnection } from 'typeorm';
import DatabaseConfig from './config/database.config'
import DatabaseConfigTesting from './config/database.config.testing';
import logger from './utilities/logger';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const connectToDatabase = async (): Promise<Connection> => {
    const connection: Promise<Connection> = createConnection(
        process.env.NODE_ENV === 'test' ? DatabaseConfigTesting : DatabaseConfig
    )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    connection.then((connection: any) => {
        logger.info(`Connected to ${connection.options.type} database ${connection.options.database} on ${connection.options.host}:${connection.options.port}`, { filePath: __filename })
    })
    .catch((error) => { logger.error(error, { filePath: __filename }) })

    return connection
}

export default connectToDatabase