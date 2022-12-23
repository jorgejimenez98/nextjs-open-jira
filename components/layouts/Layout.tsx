import React from 'react'
import { Box } from '@mui/material'
import Head from 'next/head'
import Navbar from '../ui/Navbar'

interface LayoutProps {
    title?: string
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { title = 'Open Jira ', children } = props

  return (
    <Box sx={{ flexFlow: 1 }}>
        <Head>
            <title>{title}</title>
        </Head>

        {/* Navbar */}
        <Navbar />

        {/* Sidebar */}

        <Box sx={{ padding: '10px 20px'}}>
            {children}
        </Box>
    </Box>
  )
}

export default Layout