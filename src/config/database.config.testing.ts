enum DatabaseType {
    SQLITE = 'sqlite'
}

const DatabaseConfigTesting = {
    type: DatabaseType.SQLITE,
    database: ":memory:",
    dropSchema: true,
    synchronize: true,
    logging: false,
    entities: ["dist/**/*.entity{.ts,.js}",
        "src/**/*.entity{.ts,.js}"]
}

export default Object.freeze(DatabaseConfigTesting)