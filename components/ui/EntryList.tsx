/* eslint-disable react-hooks/exhaustive-deps */
import { Paper, List } from '@mui/material'
import React, { useContext, useMemo } from 'react'
import { EntriesContext } from '../../context/entries'
import { StatusType } from '../../interfaces'
import { EntryCard } from './'

interface EntryListProps {
    status: StatusType
}

const EntryList: React.FC<EntryListProps> = ({ status }) => {
const { entries } = useContext(EntriesContext)
const entriesList = useMemo(() => entries.filter(entry => entry.status === status), [entries])

  return (
    <div>
        <Paper sx={{ 
            backgroundColor: 'transparent',
            height: 'calc(100vh - 180px)', 
            overflowY: "scroll", 
            padding: 1,
        }}>
            <List sx={{ opacity: 1 }}>
                {entriesList.map(entry => <EntryCard 
                    key={entry._id} entry={entry}
                />)}
            </List>
        </Paper>
    </div>
  )
}

export default EntryList