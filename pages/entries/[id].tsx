import { NextPage, GetServerSideProps } from 'next'
import { Entry, StatusType } from '../../interfaces'
import { Layout } from '../../components/layouts'
import React, { ChangeEvent, useMemo, useState } from 'react'
import { DeleteOutline, SaveAltOutlined } from '@mui/icons-material'
import { capitalize, CardHeader, Grid, Card, CardContent, TextField, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, IconButton } from '@mui/material'
import { isValidObjectId } from 'mongoose'
import { EntryModel } from '../../models'
import { getEntryById } from '../../database'

const validStatus: StatusType[] = ['PENDING', 'IN_PROGRESS', 'FINISHED']

const EntryPage: NextPage<{ entry: Entry }> = ({ entry }) => {

    const [inputValue, setInputValue] = useState(entry.description)
    const [status, setStatus] = useState<StatusType>(entry.status)
    const [touched, setTouched] = useState(false)
    const isInValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched])

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatus = e.target.value as StatusType
        setStatus(newStatus)
    }

    const handleSave = () => {
        console.log({ inputValue, status })
    }

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
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        label="Nueva entrada"
                        multiline
                        placeholder='Nueva entrada...'
                        sx={{ marginTop: 2, marginBottom: 2 }}
                        onBlur={() => setTouched(true)}
                        helperText={isInValid && 'Ingrese un valor'}
                        error={isInValid}
                    />

                    {/* RADIO */}
                    <FormControl>
                        <FormLabel>Status</FormLabel>
                        <RadioGroup 
                            row
                            value={status}
                            onChange={onStatusChange}
                        >
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
                        onClick={handleSave}
                        disabled={isInValid}
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


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params as { id: string }
    const entry = await getEntryById(id)

    if (!isValidObjectId(id)) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            entry
        }
    }
}

export default EntryPage