import React from 'react'
import './sidebar.css';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import logo from '../../assets/profilepic.jpg';
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';
import { TbHomeHeart } from 'react-icons/tb';
// import { MdRestaurantMenu } from 'react-icons/md';
import { FaAmazon } from 'react-icons/fa';
// import { TfiGift } from 'react-icons/tfi';
// import reviewsIcon from '../../assets/reviewsIcon.png';
import infoIcon from '../../assets/infoIcon.png';
// import { color, padding, margin } from '@mui/system';

const drawerWidth = 240;

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//     },
//   }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             // width: '20ch',
//             width: '30ch',
//         },
//     },
// }));

const CustomListItem = styled(ListItem)(({ theme }) => ({
    padding: theme.spacing(0, 0, 0, 1.5),
    // margin: theme.spacing(0, 0, 0, 0),
    paddingLeft: '0',
    })
);

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
    padding: theme.spacing(1, 2, 1, 1),
    margin: theme.spacing(0, 0, 0, 0),
    })
);

const CustomListItemIcon = styled(ListItemIcon)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.common.white, 0.8),
    color: 'black',
    padding: theme.spacing(1.5, 0, 1.5, 2.25),
    // margin: theme.spacing(0, 0, 0, -2),
    borderRadius: theme.shape.borderRadius*2,
    // boxShadow: theme.shadows[10],
    })
);

const CustomListItemText = styled(ListItemText)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    color: 'white',
    padding: theme.spacing(1, 0, 1, 4),
    // margin: theme.spacing(0, 0, 0, 0),
    borderRadius: theme.shape.borderRadius*3,
    // boxShadow: theme.shadows[20],
    })
);


const drawerContents = (
    <>
    <List>
        <CustomListItem>
        <CustomListItemButton href="/">
        <CustomListItemIcon >
                <TbHomeHeart />
        </CustomListItemIcon>
        <ListItemText primary="Home" style={{ 
            background: "var(--color-text-red)",
            borderRadius: '0.75rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            paddingLeft: '2rem',
            margin: (0, 0, 0, 0),
            // boxShadow: '2px 2px 8px white',
            }} />
        </CustomListItemButton>
        </CustomListItem>
    </List>
    <List>
        {/* <CustomListItem >
            <CustomListItemButton href="/giftguides">
            <CustomListItemIcon >
                <TfiGift />
            </CustomListItemIcon>
            <CustomListItemText primary="Gift Guides" />
            </CustomListItemButton>
        </CustomListItem> */}
        {/* <CustomListItem >
            <CustomListItemButton href="/recipes">
            <CustomListItemIcon>
                <MdRestaurantMenu />
            </CustomListItemIcon>
            <CustomListItemText primary="Recipes" />
            </CustomListItemButton>
        </CustomListItem> */}
        {/* <CustomListItem >
            <CustomListItemButton href="/reviews">
            <CustomListItemIcon>
                <img src={reviewsIcon} alt="reviewsIcon"/>
            </CustomListItemIcon>
            <CustomListItemText primary="Reviews" />
            </CustomListItemButton>
        </CustomListItem> */}
        <CustomListItem >
            <CustomListItemButton href="/storefront">
            <CustomListItemIcon>
                <FaAmazon />
            </CustomListItemIcon>
            <CustomListItemText primary="StoreFront" />
            </CustomListItemButton>
        </CustomListItem>
        <CustomListItem >
            <CustomListItemButton href="/aboutme">
            <CustomListItemIcon>
                <img src={infoIcon} alt="infoIcon"/>
            </CustomListItemIcon>
            <CustomListItemText primary="About Me" />
            </CustomListItemButton>
        </CustomListItem>
    </List>
    </>
);


const Sidebar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
            position="fixed"
            sx={{
                width: { md: `calc(100% - ${drawerWidth}px)` },
                mr: { md: `${drawerWidth}px` },
                backgroundColor: "transparent",
                boxShadow: 0,
            }}
        >
            <Toolbar>
                <Box sx={{ flexGrow: 0}}>
                    <Tooltip title="Home">
                    <IconButton href='/' sx={{ p: 0,  }}>
                        <Avatar alt="logo" src={logo} variant="rounded" sx={{ marginRight: '0.5rem', border: 3, borderColor: 'var(--color-text-red)' }} />
                        <Typography className="mydearest__appbar-logo" sx={{fontSize: '2rem', fontFamily: 'Brush Script MT'}} >
                            MyDearestJulia
                        </Typography>
                    </IconButton>
                    </Tooltip>
                </Box>

                {/* <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search> */}

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 4, display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

            </Toolbar>
        </AppBar>

        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="drawer contents"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
            className="mydearest__drawer"
            container={container}
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                // display: { xs: 'block', sm: 'none' },
                display: { xs: 'block', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box',
                width: drawerWidth, backgroundColor: 'var(--color-bg-sidebar)',
                color: 'white' }, 
            }}
            >
            {drawerContents}
            </Drawer>
            
            <Drawer
            className="mydearest__drawer"
            variant="permanent"
            anchor="right"
            sx={{
                // display: { xs: 'none', sm: 'block' },
                display: { xs: 'none', sm: 'none', md: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box',
                width: drawerWidth, backgroundColor: "transparent",
                color: 'white',  },
            }}
            open
            >
            {drawerContents}
            </Drawer>
        </Box>
    </Box>
  )
}

export default Sidebar