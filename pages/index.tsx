import React from 'react'
import { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'

const HomePage: NextPage = () => {
  
  return <Layout>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)'}}>
          <CardHeader title={'Pendientes'} />
          <CardContent>
            {/* Agregar una nueva entrada */}
            {/* Listado de las Entradas */}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)'}}>
          <CardHeader title={'En Progeso'} />
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)'}}>
          <CardHeader title={'Compeltadas'} />
        </Card>
      </Grid>
    </Grid>
  </Layout>
}

export default HomePage