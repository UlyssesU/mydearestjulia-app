import React from 'react'
import { Footer, Sidebar, ReviewsBody } from '../components';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const drawerWidth = 240;

const Reviews = () => {
  return (
    <div>
        <Box
            component="main"
            sx={{ flexGrow: 1,
                p: 3,
                width: { md: `calc(100% - ${drawerWidth}px)` 
            } }}
        >
            <CssBaseline />
            <Sidebar />
            <ReviewsBody />
            <Footer />
        </Box>
    </div>
  )
}

export default Reviews