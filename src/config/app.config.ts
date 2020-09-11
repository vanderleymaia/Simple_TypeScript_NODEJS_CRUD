import express, {Application} from 'express'
import mongoose from 'mongoose'
export default class App {
    public app: Application;
    public port:number;

    constructor(appConfig:{port:number, middlewares:any, controllers:any}){
        this.app = express();
        this.port=appConfig.port
        this.setMongooseConnection()
        this.setMiddlewares(appConfig.middlewares)
        this.setControllers(appConfig.controllers)
    }

    public listen(){
        this.app.listen(this.port, ()=>console.log('Express has been started...'));
    }

    private setMiddlewares(middlewares:{forEach:(mid:(middleware:any)=> void)=>void}){
        middlewares.forEach(middleware=>{
            this.app.use(middleware)
        })
    }

    private setControllers(controllers:{forEach:(con:(controller:any)=> void)=>void}){
        controllers.forEach(controller=>{
            this.app.use('/', controller.router)
        })
    }

    private setMongooseConnection(){
        mongoose.connect('mongodb://localhost:8081/type', 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
    }
}

