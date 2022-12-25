import { Entry } from '../../interfaces'
import { EntriesContext } from './EntriesContext'
import { entriesReducer } from './entriesReducer'
import React, { FC, ReactNode, useReducer, useEffect } from 'react'
import { entriesApi } from '../../apis'

export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [],
}

export const EntriesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

  const addNewentry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description })
    dispatch({ type: '[Entry] Add-Entry', payload: data })
  }

  const updateEntry = async (entry: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, { 
        description: entry.description, status: entry.status
       })
      dispatch({ type: '[Entry] Entry-Updated', payload: data })
    } catch (error) {
      console.warn(error) 
    }
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