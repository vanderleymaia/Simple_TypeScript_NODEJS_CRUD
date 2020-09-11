import {Request, Response} from 'express'
import TaskModel, {ITask, ITaskObj} from '../models/task.model'

export default class TaskService {
    public async findAll(req:Request, res:Response){
        const tasks:Array<ITaskObj> = await TaskModel.find()
        return res.json({tasks})
    }

    public async findOne(req:Request, res:Response){
        const task = await TaskModel.findById(req.params.id)
        console.log(req.params);
        return res.json({task})
    }

    public create = async (req:Request, res:Response) => {
        // const task = await TaskModel.create(req.body)
        // return res.json({task})
        const itask = req.body as ITask;
        const task = await TaskModel.create(itask)
        console.log(itask.title);        
        return res.json({task})
    }

    public destroy = async (req: Request, res:Response) => {
        const result = await TaskModel.deleteOne({_id:req.params.id})
        return res.json({result})
    }

    public update = async (req: Request, res:Response) => {
        const modifiedTask = req.body as ITask 
        console.log(req.body);
        const result = await TaskModel.updateOne({_id:req.params.id}, modifiedTask)
        return res.json({result})
    }
}


