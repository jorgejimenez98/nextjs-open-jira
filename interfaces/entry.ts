export interface Entry {
    _id: string
    description: string
    createdAt: number
    status: StatusType
}

export type StatusType = 'PENDING' | 'IN_PROGRESS' | 'FINISHED'