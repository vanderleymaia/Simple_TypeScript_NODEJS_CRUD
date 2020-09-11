import * as express from 'express'
import TaskService from '../services/task.service'

export default class TaskController {
    public router = express.Router();
    public path = '/';
    private taskService = new TaskService()
    constructor(){
        this.setupRoutes();
    }

    public setupRoutes(){
        this.router.get(`${this.path}`, this.taskService.findAll)
        this.router.post(`${this.path}`, this.taskService.create)
        this.router.get(`${this.path}:id`, this.taskService.findOne)
        this.router.delete(`${this.path}:id`, this.taskService.destroy)
        this.router.put(`${this.path}:id`, this.taskService.update)
    }
}