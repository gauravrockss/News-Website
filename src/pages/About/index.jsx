import React from 'react';
import Hero from '../../components/Hero';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from '../../components/Image';

const index = () => {
    return (
        <>
            <Hero
                img='img2.jpg'
                title='About us'
                subtitle='Our mission is to transform the way the world moves freight.'
            />
            <Container maxWidth='false'>
                <Box my={5}>
                    <Typography variant='h4' textAlign='center'>
                        Our Team
                    </Typography>
                    <Grid container spacing={2} mt={3}>
                        <Grid item xs={12} md={6} lg={3} textAlign='center'>
                            <Image
                                name='t1.jpg'
                                sx={{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '100%',
                                    transition: '0.7s ease-in-out',
                                    cursor: 'pointer',

                                    '&:hover': {
                                        transform: 'scale(1.06)',
                                    },
                                }}
                            />
                            <Box>
                                <Typography>Gaurav Gupta</Typography>
                                <Typography>Full Stack developer</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} textAlign='center'>
                            <Image
                                name='t2.jpg'
                                sx={{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '100%',
                                    transition: '0.7s ease-in-out',
                                    cursor: 'pointer',

                                    '&:hover': {
                                        transform: 'scale(1.06)',
                                    },
                                }}
                            />
                            <Box>
                                <Typography>Pragati Gupta</Typography>
                                <Typography>Web Designer</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} textAlign='center'>
                            <Image
                                name='t3.jpg'
                                sx={{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '100%',
                                    transition: '0.7s ease-in-out',
                                    cursor: 'pointer',

                                    '&:hover': {
                                        transform: 'scale(1.06)',
                                    },
                                }}
                            />
                            <Box>
                                <Typography>Komal Gupta</Typography>
                                <Typography>Digital Manager</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} textAlign='center'>
                            <Image
                                name='t4.jpg'
                                sx={{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '100%',
                                    transition: '0.7s ease-in-out',
                                    cursor: 'pointer',

                                    '&:hover': {
                                        transform: 'scale(1.06)',
                                    },
                                }}
                            />
                            <Box>
                                <Typography>Stephan</Typography>
                                <Typography>Sales Man</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                {/* about company */}
                <Box my={5}>
                    <Typography variant='h4' textAlign='center'>
                        About Company
                    </Typography>
                    <Grid container spacing={5} mt={5}>
                        <Grid item xs={12} lg={6} textAlign='center'>
                            <Image
                                name='company.jpg'
                                sx={{
                                    // width: '150px',
                                    // height: '150px',
                                    borderRadius: '10px',
                                    transition: '0.7s ease-in-out',
                                    cursor: 'pointer',

                                    '&:hover': {
                                        transform: 'scale(1.06)',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} lg={6} textAlign='center'>
                            <Box textAlign='left'>
                                <Typography
                                    variant='h6'
                                    sx={{ color: '#1A73E8' }}>
                                    About us
                                </Typography>
                                <Typography>
                                    Welcome to GG News, where information meets
                                    insight, and journalism takes center stage.
                                    As a trusted source of news and analysis, we
                                    are committed to delivering accurate,
                                    unbiased, and timely information to our
                                    readers.
                                </Typography>
                                <Typography
                                    variant='h6'
                                    sx={{ color: '#1A73E8', mt: 1 }}>
                                    Story:
                                </Typography>
                                <Typography>
                                    Founded with a vision to empower individuals
                                    with knowledge, [News Company Name] emerged
                                    as a beacon of journalistic excellence. Our
                                    journey began with a simple yet powerful
                                    idea – to provide the public with reliable
                                    news that transcends sensationalism and
                                    fosters a deeper understanding of the world
                                    around us.
                                </Typography>
                                <Typography
                                    variant='h6'
                                    sx={{ color: '#1A73E8', mt: 1 }}>
                                    Join Us in the Conversation:
                                </Typography>
                                <Typography>
                                    GG News is more than just a news outlet;
                                    it's a platform for dialogue and discourse.
                                    We invite you to join us in the conversation
                                    by sharing your thoughts, insights, and
                                    perspectives. Together, let's navigate the
                                    complexities of our world and stay informed
                                    about the issues that shape our lives.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default index;
