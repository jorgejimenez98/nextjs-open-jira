import { db } from '../../../database'
import { EntryModel, IEntry } from '../../../models'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = 
| { message: string }
| { data: IEntry[] }
| IEntry

export default function handler(
    req: NextApiRequest, res: NextApiResponse<Data>
) {
    switch (req.method){
        case 'GET':
            return getEntries(res)
        
        case 'POST':
            return postEntry(req, res)
        
        default:
            return res.status(405).json({ message: 'Method not Allowed' }) 
    }
}

const getEntries = async (res:NextApiResponse<Data>) => {
    await db.connect()
    const entries = await EntryModel.find({}).sort({ createdAt: 'ascending' })
    await db.disconnect()
    res.status(200).json({ data: entries })
}

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    const { description = '' } = req.body
    const newEntry = new EntryModel({
        description,
        createdAt: Date.now()
    })

    try {
        await db.connect()
        await newEntry.save()
        await db.disconnect()
        return res.status(201).json(newEntry)
    } catch (error) {
        await db.disconnect()
        console.warn(error)
        return res.status(400).json({ message: 'Algo ha salido mal' })   
    }   
}