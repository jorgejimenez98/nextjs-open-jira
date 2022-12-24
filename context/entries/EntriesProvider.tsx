import { Entry } from '../../interfaces'
import { EntriesContext } from './EntriesContext'
import { entriesReducer } from './entriesReducer'
import React, { FC, ReactNode, useReducer } from 'react'
import { v4 as UUID4 } from 'uuid'

export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: UUID4(),
            description: 'Empty description 1',
            status: 'PENDING',
            createdAt: Date.now()
        },
        {
            _id: UUID4(),
            description: 'Empty description 2',
            status: 'IN_PROGRESS',
            createdAt: Date.now()
        },
        {
            _id: UUID4(),
            description: 'Empty description 4',
            status: 'FINISHED',
            createdAt: Date.now()
        }
    ],
}

export const EntriesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

  const addNewentry = (description: string) => {
    const newEntry: Entry = {
        _id: UUID4(),
        description,
        createdAt: Date.now(),
        status: 'PENDING'
    }
    dispatch({ type: '[Entry] Add-Entry', payload: newEntry})
  }

  return (
    <EntriesContext.Provider value={{
        ...state,
        addNewentry
    }}>
        {children}
    </EntriesContext.Provider>
  )
}