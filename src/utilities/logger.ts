import LoggerConfig from "../config/logger.config";
import setStringColor from "./colors";
/* eslint-disable @typescript-eslint/no-var-requires */
const { createLogger, format, transports } = require('winston')
const { printf } = format
const path = require('path')

const getLoggerLevel = (): string => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return LoggerConfig.loggerLevel.DEVELOPMENT
        case 'test':
            return LoggerConfig.loggerLevel.TEST
    }
    return LoggerConfig.loggerLevel.PRODUCTION
}

const getFilePathFromCompletePath = (completeFilePath: string): string => {
    if (completeFilePath) {
        return path.basename(completeFilePath)
    }
    logger.warn('File path not provided', { filePath: __filename })
    return 'Path not defined'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const myFormat = printf(({ level, message, filePath, timestamp }: any) => {
    return setStringColor(`[${level.toUpperCase()}] ${timestamp} [${getFilePathFromCompletePath(filePath)}]: `, level) + `${message}`;
});

const logger = createLogger({
    level: getLoggerLevel(),
    format: format.combine(
        format.timestamp({
            format: LoggerConfig.TIMESTAMP_FORMAT
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json(),
        myFormat
    ),
    transports: [
        //
        // - Write to all logs with level selected above through console logging
        // - Write all logs error (and below) to `errors.log`.
        //
        new transports.Console(),
        new transports.File({ filename: 'logs/'+LoggerConfig.ERRORS_FILENAME, level: 'error' })
    ]
});

/**
 * Interface to make use of the logger object easily by 
 * providing autocomplete functionality
 */
interface Logger {
    error(message: string | Error, options: { filePath: string }): void
    warn(message: string, options: { filePath: string }): void
    info(message: string, options: { filePath: string }): void
    http(message: string, options: { filePath: string }): void
    verbose(message: string, options: { filePath: string }): void
    debug(message: string, options: { filePath: string }): void
    silly(message: string, options: { filePath: string }): void
}

export default logger as Logger