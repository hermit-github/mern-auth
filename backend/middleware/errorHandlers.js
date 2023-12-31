import config from "../config/config.js";
import chalk from "chalk";

const notFound = (req,res,next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler = (err,req,res,next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        statusCode = 404;
        message = 'Resource not found'
    }

    console.error(chalk.yellowBright("======================================= Error In API ========================================="));
    console.log('err', err)
    console.error(chalk.yellowBright("=============================================================================================="));

    res.status(statusCode).json({
        success:false,
        message,
        stack:config.NODE_ENV === 'production'?null:err.stack
    })
}

export {errorHandler,notFound}