import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Divider, IconButton, Typography } from '@mui/material';
const NewsCardHeader = ({ category }) => {
    return (
        <>
            <Box px={2} py={1} display='flex' alignItems='center'>
                <Typography
                    fontWeight='bold'
                    sx={{ color: '#1A73E8', textTransform: 'capitalize' }}>
                    {category}
                </Typography>
                <IconButton>
                    <ArrowForwardIosIcon
                        fontSize='small'
                        sx={{ color: '#1A73E8' }}
                    />
                </IconButton>
            </Box>
            <Divider />
        </>
    );
};

export default NewsCardHeader;
