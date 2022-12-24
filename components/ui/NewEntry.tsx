import React, { useState } from 'react'
import { Button, Box, TextField } from '@mui/material'
import { AddCircleOutlined, SaveOutlined } from '@mui/icons-material'

const NewEntry: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const handleSave = () => {
    if (inputValue.length === 0) return 
    console.log(inputValue)
  }

  return <>

   <Box sx={{ marginBottom: 2, paddingX: 2 }}>
       {isAdding ? <>
            <TextField 
                fullWidth
                sx={{ marginTop: 2, marginBottom: 1 }}
                placeholder={'Write here...'}
                multiline
                onBlur={() => setIsTouched(true)}
                autoFocus
                error={inputValue.length <= 0 && isTouched}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                label='New Entry'
                helperText='Insert a value'
            />

            <Box display={'flex'} justifyContent='space-between'>
                <Button
                    variant='text'
                    onClick={() => setIsAdding(false)}
                >
                    Cancelar
                </Button>
                <Button
                    variant='outlined'
                    color='secondary'
                    endIcon={<SaveOutlined />}
                    onClick={handleSave}
                >
                    Guardar
                </Button>
            </Box>
       </> : <>
            <Button
                startIcon={<AddCircleOutlined />}
                fullWidth
                variant='outlined'
                onClick={() => setIsAdding(true)}
            >
                Agregar tarea
            </Button>
       </>}
   </Box>
  </>
}

export default NewEntry