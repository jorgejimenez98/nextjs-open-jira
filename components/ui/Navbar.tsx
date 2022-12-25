import React, { useContext } from 'react'
import { UiContext } from '../../context/ui';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar, IconButton, Toolbar, Typography, Link } from '@mui/material'
import NextLink from 'next/link'

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
            <NextLink href={'/'} passHref>
              <Link underline='none' color='white'>
                <Typography variant='h6'>OpenJira</Typography>
              </Link>
            </NextLink>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar