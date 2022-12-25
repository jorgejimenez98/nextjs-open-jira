import { useRouter } from 'next/router'
import { Entry } from '../../interfaces'
import { UiContext } from '../../context/ui'
import React, { DragEvent, useContext } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'

const EntryCard: React.FC<{ entry: Entry }> = ({ entry }) => {
    const { startDragging, endDragging } = useContext(UiContext)
    const router = useRouter()
    const handleDrag = (event: DragEvent) => {
        event.dataTransfer?.setData('text', entry._id)
        startDragging()
    }

    const onDragEnd = () => {
        endDragging()
    }

  return (
    <Card
        sx={{marginBottom: 1 }}
        draggable
        onDragStart={handleDrag}
        onDragEnd={onDragEnd}
        onClick={() => router.push(`/entries/${entry._id}`)}
        // Eventos de Drag
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>
                    {entry.description}
                </Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                <Typography variant='body2'>
                    Hace 30 minutos
                </Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}

export default EntryCard