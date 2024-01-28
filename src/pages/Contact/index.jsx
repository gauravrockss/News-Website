// Import necessary dependencies
import React from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Paper,
    Box,
} from '@mui/material';
import Hero from '../../components/Hero';
import Image from '../../components/Image';

// ContactUs component
const Index = () => {
    const handleSubmit = event => {
        event.preventDefault();
        // Add logic to handle form submission
    };

    return (
        <>
            <Hero
                img='contact1.jpg'
                title=' Contact Us'
                subtitle='Feel free to get in touch with us. We are here to help you!'
            />
            <Container maxWidth='false'>
                {/* Contact Form */}
                <Grid container spacing={3} my={5}>
                    <Grid item xs={12} lg={6}>
                        <Paper
                            elevation={3}
                            style={{
                                padding: '20px',
                                position: 'relative', // Set position to relative
                                background: 'rgba(255, 255, 255, 0.8)', // Add a transparent background
                            }}>
                            {/* Add the transparent image as a background */}
                            <Box
                                component='div'
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: `url(${process.env.PUBLIC_URL}images/img1.jpg)`,
                                    backgroundSize: 'cover',
                                    opacity: 0.5, // Set the desired opacity
                                    zIndex: -1, // Move the image to the background
                                }}
                            />
                            <Typography
                                variant='h4'
                                sx={{ mb: 2, textAlign: 'center' }}>
                                Fill Details
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label='Your Name'
                                            variant='outlined'
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label='Your Email'
                                            variant='outlined'
                                            type='email'
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label='Message'
                                            variant='outlined'
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type='submit'
                                            variant='contained'
                                            color='primary'
                                            fullWidth>
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item sx={12} lg={6}>
                        <Image
                            name='help1.jpg'
                            sx={{
                                borderRadius: '10px',
                                transition: '0.7s ease-in-out',
                                cursor: 'pointer',

                                '&:hover': {
                                    transform: 'scale(1.06)',
                                },
                            }}
                        />
                    </Grid>
                    {/* You can add more grid items for additional content */}
                </Grid>
            </Container>
        </>
    );
};

export default Index;
