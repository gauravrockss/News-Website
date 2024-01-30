// Import necessary dependencies
import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import Hero from '../../components/Hero';
import Image from '../../components/Image';

// HelpPage component
const Index = () => {
    return (
        <>
            <Hero
                img='help2.jpg'
                title=' Help Center'
                subtitle='   Frequently Asked Questions (FAQs)'
            />
            <Container maxWidth='false' sx={{ my: 5 }}>
                <Paper elevation={0} style={{ padding: '20px' }}>
                    <Grid
                        container
                        spacing={2}
                        display='flex'
                        justifyContent='center'>
                        <Grid item lg={6} xs={12}>
                            <Typography variant='h4' sx={{ mb: 3 }}>
                                Frequently Asked Questions (FAQs)
                            </Typography>

                            {/* FAQ Section */}
                            <Typography
                                variant='h6'
                                style={{ marginTop: '10px' }}>
                                <strong>Q: What is our company about?</strong>
                                <br />
                                A: Our company is dedicated to providing Latest
                                News for user.
                            </Typography>

                            <Typography
                                variant='h6'
                                style={{ marginTop: '10px' }}>
                                <strong>
                                    Q: How can I contact customer support?
                                </strong>
                                <br />
                                A: You can contact our customer support team
                                through the Contact Us page.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Image
                                name='help1.jpg'
                                sx={{
                                    height: 200,

                                    borderRadius: '4px',
                                    transition: '0.7s ease-in-out',
                                    cursor: 'pointer',

                                    '&:hover': {
                                        transform: 'scale(1.06)',
                                    },
                                }}
                            />
                            <br />
                            <Image
                                name='help2.jpg'
                                sx={{
                                    height: 200,
                                    ml: { md: 35, xs: 0 },
                                    borderRadius: '4px',
                                    transition: '0.7s ease-in-out',
                                    cursor: 'pointer',

                                    '&:hover': {
                                        transform: 'scale(1.06)',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    {/* Additional Sections */}
                    {/* You can add more sections as needed, such as user guides, troubleshooting, etc. */}

                    <Typography variant='h4' sx={{ mt: 8 }} gutterBottom>
                        Contact Information
                    </Typography>

                    {/* Contact Information Section */}
                    <Typography variant='h6' sx={{ mt: 2 }}>
                        If you have further questions or need assistance, you
                        can reach out to us at:
                        <br />
                        Email : gauravmaharishi6392@gmail.com
                        <br />
                        Phone :+91 63922121**
                    </Typography>
                </Paper>
            </Container>
        </>
    );
};

export default Index;
