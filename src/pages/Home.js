import React from 'react'
import { Footer, Sidebar } from '../components';
// import { Blog, Featured, Header } from '../containers';
import { Header } from '../containers';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const drawerWidth = 240;

const Home = () => {
  return (
    <>
        <Box
            component="main"
            sx={{ flexGrow: 1,
                p: 3, width: { md: `calc(100% - ${drawerWidth}px)`
            } }}
        >
            <CssBaseline />
            <Sidebar />
            <Header />
            {/* <Featured /> */}
            {/* <Blog /> */}
            <Footer />
        </Box>
    </>
  )
}

export default Home