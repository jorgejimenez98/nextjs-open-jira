import { AddCircleOutlined, SaveOutlined } from '@mui/icons-material'
import { Button, Box, TextField } from '@mui/material'
import React from 'react'

const NewEntry: React.FC = () => {
  return <>

   <Box sx={{ marginBottom: 2, paddingX: 2 }}>
        <Button
            startIcon={<AddCircleOutlined />}
            fullWidth
            variant='outlined'
        >
            Agregar tarea
        </Button>
        
        <TextField 
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder={'Write here...'}
            multiline
            autoFocus
            label='New Entry'
            helperText='Insert a value'
        />

        <Box display={'flex'} justifyContent='space-between'>
            <Button
                variant='text'
            >
                Cancelar
            </Button>
            <Button
                variant='outlined'
                color='secondary'
                endIcon={<SaveOutlined />}
            >
                Guardar
            </Button>
        </Box>
   </Box>
  </>
}

export default NewEntry