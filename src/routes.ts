import express from "express";

const setAppRoutes = (app: express.Application): void => {
    const router = express.Router();
    // router.use('/module', moduleRouter)
    app.use('', router)
}

export default setAppRoutes