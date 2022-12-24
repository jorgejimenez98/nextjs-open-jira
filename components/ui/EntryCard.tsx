import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Entry } from '../../interfaces'

const EntryCard: React.FC<{ entry: Entry }> = ({ entry }) => {
  return (
    <Card
        sx={{marginBottom: 1 }}
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