import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position='static' sx={{bgcolor: 'transparent', boxShadow:'none', paddingTop:'20px'}}>
        <Container maxWidth='xl'>
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component='a'
                    href="/home"
                    sx={{
                      ml: 15,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'Inter',
                      fontSize: '24px',
                      lineHeight: '24px',
                      fontWeight: 700,
                      letterSpacing: '3%',
                      color: 'black',
                      textDecoration: 'none',
                    }}    
                >Exclusive</Typography>
                <Box sx={{display:'flex', ml:'330px'}}>
                    <Typography
                        variant="h6"
                        noWrap
                        component='a'
                        href="/home"
                        sx={{
                        
                        display: { xs: 'none', md: 'flex'},
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: 400,
                        letterSpacing: '3%',
                        color: 'black',
                        textDecoration: 'none',
                        }}    
                    >Home
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component='a'
                        href="/contact"
                        sx={{
                        ml: '50px',
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: 400,
                        letterSpacing: '3%',
                        color: 'black',
                        textDecoration: 'none',
                        }}    
                    >Contact
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component='a'
                        href="/aboutus"
                        sx={{
                        ml: '50px',
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: 400,
                        letterSpacing: '3%',
                        color: 'black',
                        textDecoration: 'none',
                        }}    
                    >About
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component='a'
                        href="/signup"
                        sx={{
                        ml: '50px',
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: 400,
                        letterSpacing: '3%',
                        color: 'black',
                        textDecoration: 'none',
                        }}    
                    >Sign Up
                    </Typography>
                </Box>
            </Toolbar>

        </Container>
    </AppBar>
  )
}

export default Header