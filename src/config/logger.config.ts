const LoggerConfig = {
    TIMESTAMP_FORMAT: 'HH:mm:ss',
    ERRORS_FILENAME: 'errors.log',
    loggerLevel: {
        PRODUCTION: 'info',
        DEVELOPMENT: 'silly',
        TEST: 'warn'
    },
}

export default LoggerConfig