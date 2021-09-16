enum DatabaseType {
    MYSQL = 'mysql'
}

const DatabaseConfig = {
    type : DatabaseType.MYSQL,
    host : 'localhost',
    port : 3306,
    username : process.env.DATABASE_USERNAME,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME,
}

export default DatabaseConfig