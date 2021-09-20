enum DatabaseType {
    MYSQL = 'mysql'
}

const DatabaseConfig = {
    type: DatabaseType.MYSQL,
    host: 'localhost',
    port: 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    // TODO: careful with this option as it can delete data in production
    synchronize: true,
    entities: ["dist/**/*.entity{.ts,.js}",
        "src/**/*.entity{.ts,.js}"]
}

export default DatabaseConfig