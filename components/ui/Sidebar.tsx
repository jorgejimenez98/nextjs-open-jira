import React, { useContext } from 'react'
import { UiContext } from '../../context/ui';
import { Drawer, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

const Sidebar: React.FC = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UiContext)

  return (
    <Drawer
        anchor='left'
        open={sideMenuOpen}
        onClose={() => closeSideMenu()}
    >
        <Box sx={{ width: 250 }}>
            <Box sx={{ padding: '5px 10px'}}>
                <Typography variant='h4'>
                    Menu
                </Typography>
            </Box>

            <List>
                {menuItems.map( (text, idx) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {idx % 2 === 0 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                {menuItems.map( (text, idx) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {idx % 2 === 0 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>

    </Drawer>
  )
}

export default Sidebar