import { createContext } from 'react'
import { Entry } from '../../interfaces'

interface ContextProps {
    entries: Entry[]
    addNewentry: (description: string) => void 
}

export const EntriesContext = createContext({} as ContextProps)