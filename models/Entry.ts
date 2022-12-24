import mongoose, { Model, Schema } from 'mongoose'
import { Entry } from '../interfaces'

interface IEntry extends Entry { }

const entrySchema = new Schema({
    description: { type: String, requried: true },
    createdAt: { type: Number },
    status: { 
        type: String,
        enum: {
            values: ['PENDING', 'IN_PROGRESS' , 'FINISHED'],
            message: '{VALUE} no es un estado permitido'
        }
    }
})

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema)

export default EntryModel