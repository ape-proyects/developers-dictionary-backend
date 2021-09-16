// Takes the variables contained in .env file and adds them to "process.env"
// With process.env.VARIABLE_NAME we can access them
import * as dotenv from "dotenv";
dotenv.config();

import 'reflect-metadata';
import express from 'express';
import http from 'http'

import connectToDatabase from './databaseConnection';
import logger from "./utilities/logger";

const app: express.Application = express();
const httpServer: http.Server = http.createServer(app);

connectToDatabase()

// Start server on port from environment variables or default port
const port = process.env.PORT || 3000
httpServer.listen(port)

httpServer.on('error', (err) => {
    logger.error(err)
})

httpServer.on('listening', () => {
    logger.info(`Server Started on port ${httpServer.address().port}`, { filePath: __filename })
})

export { app, httpServer }
