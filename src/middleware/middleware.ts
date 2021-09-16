/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
const morgan = require('morgan');
const cors = require('cors');

/**
 * Sets app middleware
 * 
 * @param app express application
 */
const setMiddleware = (app: express.Application): void => {
    /**
    * Enable api to receive calls from every ip
    */
    app.use(cors())

    /**
     * Enable express to receive json in body calls
     */
    app.use(express.json())
    /**
    * Morgan middleware to log request
    */
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'))
    }
}

export default setMiddleware