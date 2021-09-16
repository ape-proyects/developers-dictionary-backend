import { createConnection } from 'typeorm';
import DatabaseConfig from './config/database.config'
import DatabaseConfigTesting from './config/database.config.testing';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const connectToDatabase = async () => {
    createConnection(
        process.env.NODE_ENV === 'test' ? DatabaseConfigTesting : DatabaseConfig
    )
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((connection: any) => { if (process.env.NODE_ENV === 'test') { return } console.log(`Connected to ${connection.options.type} database ${connection.options.database} on ${connection.options.host}:${connection.options.port}`) })
        .catch((error) => { console.log(error) })
}

export default connectToDatabase