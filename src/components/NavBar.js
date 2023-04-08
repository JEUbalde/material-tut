// This is the NavBar of the website
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, AppBar, Toolbar, IconButton, Typography, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export default function NavBar(){
    
    const navigate = useNavigate();

    const home = () => {
        navigate('/')
    };

    const login = () => {
        navigate('/login')
    };

    const rooms = () => {
        navigate('/rooms')
    };



    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Hotel Booking System 
                </Typography>
                <Button color="inherit" onClick={home}>Home</Button>
                <Button color="inherit" onClick={login}>Login</Button>
                <Button color="inherit" onClick={rooms}>Rooms</Button>
                <Button color="inherit">About</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}