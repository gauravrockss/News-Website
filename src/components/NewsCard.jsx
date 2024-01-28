import { Box, Typography } from '@mui/material';
import React from 'react';

const NewsCard = ({
    source,
    title,
    lastUpdated,
    imageUrl,
    description,
    url,
}) => {
    return (
        <>
            <Box display='flex' justifyContent={'space-between'} mb={3}>
                <Box display='flex' flexDirection='column'>
                    <Typography fontWeight='bold'>{source}</Typography>
                    <Typography
                        variant='body2'
                        sx={{
                            mt: 1,
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        }}>
                        <a
                            href={url}
                            rel='noreferrer'
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                            }}
                            target='_blank'>
                            {title}
                        </a>
                    </Typography>
                    {description && (
                        <Typography sx={{ my: 1 }} variant='caption'>
                            {description}
                        </Typography>
                    )}
                    <Typography variant='caption' fontWeight='bold'>
                        {lastUpdated}
                    </Typography>
                </Box>
                <Box>
                    <img
                        src={
                            imageUrl
                                ? imageUrl
                                : 'https://media.moddb.com/images/games/1/16/15430/paper1.jpg'
                        }
                        alt='#img'
                        style={{
                            width: '120px',
                            height: '120px',
                            objectFit: 'cover',
                            padding: '16px',
                            borderRadius: '25%',
                        }}
                    />
                </Box>
            </Box>
        </>
    );
};

export default NewsCard;
