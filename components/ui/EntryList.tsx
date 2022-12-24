/* eslint-disable react-hooks/exhaustive-deps */
import { EntriesContext } from '../../context/entries'
import { EntryCard } from './'
import { Paper, List } from '@mui/material'
import { StatusType } from '../../interfaces'
import { UiContext } from '../../context/ui'
import React, { useContext, useMemo , DragEvent} from 'react'
import styles from './EntryList.module.css'

interface EntryListProps {
    status: StatusType
}

const EntryList: React.FC<EntryListProps> = ({ status }) => {
    const { entries, updateEntry } = useContext(EntriesContext)
    const { isDragging, endDragging } = useContext(UiContext)
    const entriesList = useMemo(() => entries.filter(entry => entry.status === status), [entries])

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text')
        const entry = entries.find(e => e._id === id)!
        updateEntry({...entry, status })
        endDragging()
    }

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }

  return (
    <div 
        onDrop={handleDrop}
        onDragOver={allowDrop}
        className={isDragging ? styles.dragging : ''}
    >
        <Paper sx={{ 
            backgroundColor: 'transparent',
            height: 'calc(100vh - 180px)', 
            overflowY: "scroll", 
            padding: 1,
        }}>
            <List sx={{ opacity: isDragging ? 0.3 : 1, transition: 'all 0.3s'  }}>
                {entriesList.map(entry => <EntryCard 
                    key={entry._id} entry={entry}
                />)}
            </List>
        </Paper>
    </div>
  )
}

export default EntryList