enum DatabaseType {
    SQLITE = 'sqlite'
}

const DatabaseConfigTesting = {
    type: DatabaseType.SQLITE,
    database: ":memory:",
    dropSchema: true,
    synchronize: true,
    logging: false
}

export default DatabaseConfigTesting