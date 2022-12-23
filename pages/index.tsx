import React from 'react'
import { NextPage } from 'next'
import { Typography } from '@mui/material'

const HomePage: NextPage = () => {
  return <>
    <Typography 
      variant='h1' 
      color={'primary'}
    >Hola Mundo
    </Typography>
  </>
}

export default HomePage