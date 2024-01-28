import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

const pages = [
    {
        name: 'About Us',
        to: '/about',
    },
    { name: 'Help', to: '/help' },
    {
        name: 'Contact Us',
        to: '/contact',
    },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position='static' sx={{ backgroundColor: 'black' }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                        <NavLink
                            to={'/'}
                            style={{
                                my: 2,

                                textDecoration: 'none',
                                color: 'inherit',
                            }}>
                            GG News
                        </NavLink>
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}>
                        <Box display='flex' alignItems='center'>
                            <IconButton
                                size='large'
                                edge='start'
                                color='inherit'
                                aria-label='menu'
                                onClick={handleOpenNavMenu}
                                sx={{ mr: 2 }}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant='h6' component='div'>
                                <NavLink
                                    to={'/'}
                                    style={{
                                        my: 2,

                                        textDecoration: 'none',
                                        color: 'inherit',
                                    }}>
                                    GG News
                                </NavLink>
                            </Typography>
                        </Box>

                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}>
                            {pages.map((page, i) => (
                                <MenuItem key={i} onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center'>
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        {pages.map(page => (
                            <Typography sx={{ mx: 1 }}>
                                <NavLink
                                    to={page.to}
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    style={{
                                        my: 2,

                                        textDecoration: 'none',
                                        color: 'inherit',
                                    }}>
                                    {page.name}
                                </NavLink>
                            </Typography>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title='Open settings'>
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}>
                                <Avatar
                                    alt='Remy Sharp'
                                    src='/static/images/avatar/2.jpg'>
                                    G
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id='menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}>
                            {settings.map(setting => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}>
                                    <Typography textAlign='center'>
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
