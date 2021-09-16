import { app, httpServer } from '../../server'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const supertest = require('supertest')
import { createConnection, getConnection } from 'typeorm'
import DatabaseConfigTesting from '../../config/database.config.testing';

const api = supertest(app)

createConnection(DatabaseConfigTesting);

const closeConnections = (): void => {
    httpServer.close()
    getConnection().close()
}

export { api, closeConnections, }