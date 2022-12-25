import mongoose from 'mongoose'
import { EntryModel, IEntry } from '../../../../models'
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../database'

type Data = 
| { message: string }
| IEntry

export default function handler(
    req: NextApiRequest, res: NextApiResponse<Data>
) {
    const { id } = req.query
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'No Valid ID' }) 
    }

    switch (req.method){
        case 'GET':
            return res.status(200).json({ message: 'TODO GET' }) 
        
        case 'PUT':
            return updateEntry(req, res, String(id))
        
        default:
            res.status(405).json({ message: 'Method not Allowed' }) 
    }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>, id: string) => {
    await db.connect()
    // Validate Model
    const entryUpdate = await EntryModel.findById(id)
    if (!entryUpdate) {
        await db.disconnect()
        return res.status(404).json({ message: 'Entry not found' })
    }
    // Get Body
    const { 
        description = entryUpdate.description, 
        status = entryUpdate.status
    } = req.body

    try {
        // Update Model
        const updatedEntry = await EntryModel.findByIdAndUpdate(id, {
            description, status
        }, { runValidators: true, new: true })
        await db.disconnect()
        // Response
        res.status(200).json(updatedEntry!)
    } catch (error) {
        await db.disconnect()
        console.warn(error)
        return res.status(400).json({ message: 'Algo ha salido mal' })  
    }
}