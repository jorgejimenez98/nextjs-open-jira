import React from 'react'
import { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { Card, CardHeader, Grid } from '@mui/material'
import { EntryList } from '../components/ui'

const HomePage: NextPage = () => {
  
  return <Layout>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)'}}>
          <CardHeader title={'Pendientes'} />
          {/* Agregar una nueva entrada */}
          {/* Listado de las Entradas */}
          <EntryList status='PENDING'/>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)'}}>
          <CardHeader title={'En Progeso'} />
          {/* Agregar una nueva entrada */}
          {/* Listado de las Entradas */}
          <EntryList status='IN_PROGRESS'/>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)'}}>
          <CardHeader title={'Compeltadas'} />
          {/* Agregar una nueva entrada */}
          {/* Listado de las Entradas */}
          <EntryList status='FINISHED' />
        </Card>
      </Grid>
    </Grid>
  </Layout>
}

export default HomePage