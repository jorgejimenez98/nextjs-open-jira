import React, { useContext } from 'react'
import { UiContext } from '../../context/ui';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

const Navbar: React.FC = () => {
  const { openSideMenu } = useContext(UiContext)

  const handleClick = () => {
    openSideMenu()
  }

  return (
    <AppBar position='sticky'>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
                onClick={handleClick}
            >
                <MenuOutlinedIcon />
            </IconButton>
            <Typography variant='h6'>OpenJira</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar