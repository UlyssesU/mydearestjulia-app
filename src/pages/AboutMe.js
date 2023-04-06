import React from 'react'
import { AboutMeBody, Footer, Sidebar } from '../components';
import { Header } from '../containers';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const drawerWidth = 240;

const AboutMe = () => {
  return (
    <div className="AboutMe">
        <Box
            component="main"
            sx={{ flexGrow: 1,
                p: 3,
                width: { md: `calc(100% - ${drawerWidth}px)` 
            } }}
        >
            <CssBaseline />
            <Sidebar />
            <Header />
            <AboutMeBody />
            <Footer />
        </Box>
    </div>
  )
}

export default AboutMe