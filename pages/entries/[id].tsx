import React from 'react'
import { NextPage } from 'next'
import { Layout } from '../../components/layouts'
import { capitalize, CardHeader, Grid, Card, CardContent, TextField, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, IconButton } from '@mui/material'
import { DeleteOutline, SaveAltOutlined } from '@mui/icons-material'
import { StatusType } from '../../interfaces'


const validStatus: StatusType[] = ['PENDING', 'IN_PROGRESS', 'FINISHED']

const EntryPage: NextPage = () => {
  return <Layout>
    <Grid
        container
        justifyContent={'center'}
        sx={{ marginTop: 2 }}
    >
        <Grid item xs={12} sm={8} md={6}>
            <Card>
                <CardHeader
                    title='Entrada:'
                    subheader={`Creada hace ... minutos`}
                />
                <CardContent>
                    <TextField 
                        autoFocus
                        fullWidth
                        label="Nueva entrada"
                        multiline
                        placeholder='Nueva entrada...'
                        sx={{ marginTop: 2, marginBottom: 2 }}
                    />

                    {/* RADIO */}
                    <FormControl>
                        <FormLabel>Status</FormLabel>
                        <RadioGroup row>
                            {validStatus.map((status, idx) => (
                                <FormControlLabel 
                                    key={idx}
                                    value={status}
                                    control={<Radio />}
                                    label={capitalize(status.toLowerCase().replace('_', ' '))}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </CardContent>

                <CardActions>
                    <Button
                        startIcon={<SaveAltOutlined />}
                        variant='contained'
                        fullWidth
                    >
                        Save
                    </Button>
                </CardActions>
            </Card>
        </Grid>

    </Grid>

    <IconButton sx={{
        position: 'fixed',
        bottom: 30,
        rigth: 30,
        backgroundColor: 'error.dark'
    }}>
        <DeleteOutline />
    </IconButton>
  </Layout>
}

export default EntryPage