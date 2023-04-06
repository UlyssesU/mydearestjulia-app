import React from 'react'
import { Footer, Sidebar, GiftGuidesBody } from '../components';
// import { Footer } from '../containers';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const drawerWidth = 240;

const GiftGuides = () => {
  return (
    <>
        <Box
            component="main"
            sx={{ flexGrow: 1,
                p: 3,
                width: { md: `calc(100% - ${drawerWidth}px)` 
            } }}
        >
            <CssBaseline />
            <Sidebar />
            <GiftGuidesBody />
            <Footer />
        </Box>
    </>
  )
}

export default GiftGuides