import { Drawer, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import React from 'react'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

const Sidebar: React.FC = () => {
  return (
    <Drawer
        anchor='left'
        open={true}
        onClose={() => console.log('Cerrando')}
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