import {Request, Response, NextFunction} from 'express'

const myMiddleware = (req:Request, res:Response, next:NextFunction) =>{
    console.log('My Middleware working with TS');
    next()    
}

export default myMiddleware