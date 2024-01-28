import { Box, Typography } from '@mui/material';
import React from 'react';

const Hero = ({ img, title, subtitle }) => {
    return (
        <div
            style={{
                background: `url(${process.env.PUBLIC_URL}images/${img})`,
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100vh',
                width: '100%',
            }}>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                // alignItems='center'
                maxWidth={800}
                sx={{ ml: { lg: 5, xs: 0 }, p: { lg: 0, xs: 2 } }}
                height='80vh'>
                <Typography
                    variant='h2'
                    color='white'
                    sx={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
                    {title}
                </Typography>
                <Typography
                    color='white'
                    sx={{
                        alignSelf: 'start',
                        fontSize: 'clamp(1rem, 5vw, 1.8rem)',
                        mt: 2,
                    }}>
                    {subtitle}
                </Typography>
            </Box>
        </div>
    );
};

export default Hero;
