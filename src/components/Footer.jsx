import {
    Box,
    Container,
    Divider,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <>
            <Box sx={{ background: 'black', color: 'white' }}>
                <Container maxWidth='false'>
                    <Box p={5}>
                        <Grid
                            container
                            spacing={3}
                            display='flex'
                            alignItems='center'
                            sx={{ borderBottom: '1px solid grey', p: 1 }}>
                            <Grid item>
                                <Typography>Follow me on </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ color: 'inherit' }}>
                                    <InstagramIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ color: 'inherit' }}>
                                    <TwitterIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ color: 'inherit' }}>
                                    <YouTubeIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ color: 'inherit' }}>
                                    <FacebookIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        {/*  */}
                        <Grid container spacing={3} sx={{ pt: 2 }}>
                            <Grid item>
                                <Typography fontWeight='bold'>
                                    GG News
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontWeight='bold'>About</Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontWeight='bold'>Terms</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography fontWeight='bold'>
                                    Privacy
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontWeight='bold'>
                                    ? Help{' '}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
