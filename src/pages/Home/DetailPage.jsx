import {
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import NewsCardHeader from '../../components/NewsCardHeader';
import NewsCard from '../../components/NewsCard';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { timeElapsedSince } from '../../utils/timeElapsedSince';
import { categoryTokens } from '../../utils/category';

const DetailPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const API_KEY = 'f463419c4e4c4ebd96549c95688e979b';
    const [filteNews, seFilterNews] = useState(null);

    async function fetchNews(category) {
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`
            );

            seFilterNews(response.data.articles);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchNews(category);
    }, [category]);

    const handleCategory = categoryName => {
        navigate(`/detail/${categoryName}`);
    };
    return (
        <>
            <Container sx={{ my: 5 }} maxWidth='false'>
                <Box my={4}>
                    <Typography
                        variant='h3'
                        textAlign='center'
                        sx={{
                            borderBottom: '1ps solid',
                            textTransform: 'capitalize',
                        }}>
                        See The Latest News of {category}
                    </Typography>
                    <Box mt={3}>
                        <Grid
                            container
                            spacing={2}
                            display='flex'
                            justifyContent='center'>
                            {categoryTokens.map(cat => (
                                <Grid item>
                                    <Chip
                                        label={cat.categoryName}
                                        onClick={() =>
                                            handleCategory(cat.categoryName)
                                        }
                                        variant='outlined'
                                        sx={{
                                            background: cat.color,
                                            border: 'none',
                                            textTransform: 'capitalize',
                                            cursor: 'pointer',
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
                <Grid container spacing={2}>
                    <Grid item lg={12} xs={12}>
                        <Card
                            sx={{
                                minHeight: '540px',
                                height: '100%',
                                transition: '0.7s ease-in-out',
                                boxShadow:
                                    'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                                cursor: 'pointer',
                                // '&:hover': {
                                //     transform: 'scale(1.06)',
                                // },
                            }}>
                            <NewsCardHeader category={category} />

                            <CardContent>
                                {filteNews?.map((article, index) => (
                                    <NewsCard
                                        key={index}
                                        source={article.source.name}
                                        url={article.url}
                                        imageUrl={article.urlToImage}
                                        title={article.title}
                                        lastUpdated={timeElapsedSince(
                                            article.publishedAt
                                        )}
                                        description={article.description}
                                    />
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default DetailPage;
