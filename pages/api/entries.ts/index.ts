import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { EntryModel, IEntry } from '../../../models'


type Data = 
| { message: string }
| { data: IEntry[] }

export default function handler(
    req: NextApiRequest, res: NextApiResponse<Data>
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not Allowed' }) 
    }
    return getEntries(res)
}

const getEntries = async (res:NextApiResponse<Data>) => {
    await db.connect()
    const entries = await EntryModel.find({}).sort({ createdAt: 'ascending' })
    await db.disconnect()
    res.status(200).json({ data: entries })
}