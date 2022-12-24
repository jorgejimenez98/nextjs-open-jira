import { Entry } from '../../interfaces'
import { EntriesContext } from './EntriesContext'
import { entriesReducer } from './entriesReducer'
import React, { FC, ReactNode, useReducer, useEffect } from 'react'
import { v4 as UUID4 } from 'uuid'
import { entriesApi } from '../../apis'

export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [],
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

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] Entry-Updated', payload: entry })
  }

  const refreshEntries =  async () => {
    const { data } = await entriesApi.get<{ data: Entry[] }>('/entries')
    dispatch({ type: '[Entry] Refresh-Data', payload: data.data })
  }

  useEffect(() => {
    refreshEntries()
  }, [])

  return (
    <EntriesContext.Provider value={{
        ...state,
        addNewentry,
        updateEntry
    }}>
        {children}
    </EntriesContext.Provider>
  )
}