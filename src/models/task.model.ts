import mongoose, {Schema, Document} from 'mongoose'

export interface ITask extends Document {
    title: string
}
export interface ITaskObj extends Document {
    _id: string,
    title: string,
}

const TaskSchema: Schema = new Schema({
    title:String
})

export default mongoose.model<ITask>('Task', TaskSchema)
