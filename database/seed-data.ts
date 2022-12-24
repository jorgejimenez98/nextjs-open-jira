import { v4 as UUID4 } from 'uuid'

interface SeedEntry {
    description: string,
    status: string
    createdAt: number
}

export const seedData: { entries: SeedEntry[] } = {
    entries: [
        {
            description: 'Empty description 1',
            status: 'PENDING',
            createdAt: Date.now()
        },
        {
            description: 'Empty description 2',
            status: 'IN_PROGRESS',
            createdAt: Date.now()
        },
        {
            description: 'Empty description 4',
            status: 'FINISHED',
            createdAt: Date.now()
        }
    ]
}