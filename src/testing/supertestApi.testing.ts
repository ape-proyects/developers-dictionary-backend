import { app, httpServer } from '../server'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const supertest = require('supertest')

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getSupertestApi = () => {
    return supertest(app)
}

const closeSupertestApi = async (): Promise<void> => {
    await httpServer.close()
}

export { getSupertestApi, closeSupertestApi }