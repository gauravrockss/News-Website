import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero';
import {
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import axios from 'axios';
import { filterArticle } from '../../utils/filterArticle';
import { timeElapsedSince } from '../../utils/timeElapsedSince';

import NewsCardHeader from '../../components/NewsCardHeader';
import NewsCard from '../../components/NewsCard';
import { categoryTokens } from '../../utils/category';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();
    const [businessState, setBusinessState] = useState(null);
    const [technologyState, setTechnologyState] = useState(null);
    const [sportsState, setSportsState] = useState(null);
    const [scienceState, setScienceState] = useState(null);
    const [healthState, setHealthState] = useState(null);
    const [entertainmentState, setEntertainmentState] = useState(null);
    const API_KEY = 'f463419c4e4c4ebd96549c95688e979b';

    async function fetchNews(category) {
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`
            );

            const data = response.data;
            switch (category) {
                case 'business':
                    setBusinessState(data.articles);
                    break;
                case 'entertainment':
                    setEntertainmentState(data.articles);
                    break;
                case 'health':
                    setHealthState(data.articles);
                    break;
                case 'science':
                    setScienceState(data.articles);
                    break;
                case 'sports':
                    setSportsState(data.articles);
                    break;
                case 'technology':
                    setTechnologyState(data.articles);
                    break;
                default:
                    console.error(`Invalid category: ${category}`);
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchNews('business');
        fetchNews('sports');
        fetchNews('technology');
        fetchNews('entertainment');
        fetchNews('health');
        fetchNews('science');
    }, []);

    const handleCategory = categoryName => {
        navigate(`/detail/${categoryName}`);
    };

    return (
        <>
            <Hero
                img='img1.jpg'
                title=' Driving innovation to change the world for good.'
                subtitle='   The future of collaborating and creating the only way we
                    know how. Together.'
            />
            <Box my={4}>
                <Typography
                    variant='h4'
                    textAlign='center'
                    sx={{ borderBottom: '1ps solid' }}>
                    See The Latest News
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

            <Box mb={4}>
                <Container maxWidth='false'>
                    <Grid container spacing={3}>
                        <Grid item lg={4} xs={12}>
                            <Card
                                sx={{
                                    minHeight: '540px',
                                    height: '100%',
                                    transition: '0.7s ease-in-out',
                                    boxShadow:
                                        'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'scale(1.06)',
                                    },
                                }}>
                                <NewsCardHeader category='Business' />

                                <CardContent>
                                    {filterArticle(businessState, 3)?.map(
                                        (article, index) => (
                                            <NewsCard
                                                key={index}
                                                source={article.source.name}
                                                url={article.url}
                                                imageUrl={article.urlToImage}
                                                title={article.title}
                                                lastUpdated={timeElapsedSince(
                                                    article.publishedAt
                                                )}
                                            />
                                        )
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                        {/*  */}
                        <Grid item lg={4} xs={12}>
                            <Card
                                sx={{
                                    minHeight: '540px',
                                    height: '100%',
                                    transition: '0.7s ease-in-out',
                                    cursor: 'pointer',
                                    boxShadow:
                                        'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                                    '&:hover': {
                                        transform: 'scale(1.06)',
                                    },
                                }}>
                                <NewsCardHeader category='Sports' />

                                <CardContent>
                                    {filterArticle(sportsState, 3)?.map(
                                        (article, index) => (
                                            <NewsCard
                                                key={index}
                                                source={article.source.name}
                                                url={article.url}
                                                imageUrl={article.urlToImage}
                                                title={article.title}
                                                lastUpdated={timeElapsedSince(
                                                    article.publishedAt
                                                )}
                                            />
                                        )
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                        {/*  */}
                        <Grid item lg={4} xs={12}>
                            <Card
                                sx={{
                                    minHeight: '540px',
                                    height: '100%',
                                    transition: '0.7s ease-in-out',
                                    cursor: 'pointer',
                                    boxShadow:
                                        'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                                    '&:hover': {
                                        transform: 'scale(1.06)',
                                    },
                                }}>
                                <NewsCardHeader category='Technology' />

                                <CardContent>
                                    {filterArticle(technologyState, 3)?.map(
                                        (article, index) => (
                                            <NewsCard
                                                key={index}
                                                source={article.source.name}
                                                url={article.url}
                                                imageUrl={article.urlToImage}
                                                title={article.title}
                                                lastUpdated={timeElapsedSince(
                                                    article.publishedAt
                                                )}
                                            />
                                        )
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                        {/*  */}
                        <Grid item lg={4} xs={12}>
                            <Card
                                sx={{
                                    minHeight: '540px',
                                    height: '100%',
                                    transition: '0.7s ease-in-out',
                                    boxShadow:
                                        'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'scale(1.06)',
                                    },
                                }}>
                                <NewsCardHeader category='Science' />

                                <CardContent>
                                    {filterArticle(scienceState, 3)?.map(
                                        (article, index) => (
                                            <NewsCard
                                                key={index}
                                                source={article.source.name}
                                                url={article.url}
                                                imageUrl={article.urlToImage}
                                                title={article.title}
                                                lastUpdated={timeElapsedSince(
                                                    article.publishedAt
                                                )}
                                            />
                                        )
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                        {/*  */}
                        <Grid item lg={4} xs={12}>
                            <Card
                                sx={{
                                    minHeight: '540px',
                                    height: '100%',
                                    transition: '0.7s ease-in-out',
                                    cursor: 'pointer',
                                    boxShadow:
                                        'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                                    '&:hover': {
                                        transform: 'scale(1.06)',
                                    },
                                }}>
                                <NewsCardHeader category='Health' />

                                <CardContent>
                                    {filterArticle(healthState, 3)?.map(
                                        (article, index) => (
                                            <NewsCard
                                                key={index}
                                                source={article.source.name}
                                                url={article.url}
                                                imageUrl={article.urlToImage}
                                                title={article.title}
                                                lastUpdated={timeElapsedSince(
                                                    article.publishedAt
                                                )}
                                            />
                                        )
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                        {/*  */}
                        <Grid item lg={4} xs={12}>
                            <Card
                                sx={{
                                    minHeight: '540px',
                                    height: '100%',
                                    transition: '0.7s ease-in-out',
                                    boxShadow:
                                        'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'scale(1.06)',
                                    },
                                }}>
                                <NewsCardHeader category='Entertainment' />

                                <CardContent>
                                    {filterArticle(entertainmentState, 3)?.map(
                                        (article, index) => (
                                            <NewsCard
                                                key={index}
                                                source={article.source.name}
                                                url={article.url}
                                                imageUrl={article.urlToImage}
                                                title={article.title}
                                                lastUpdated={timeElapsedSince(
                                                    article.publishedAt
                                                )}
                                            />
                                        )
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Index;
