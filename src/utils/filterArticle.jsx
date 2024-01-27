export function filterArticle(articles, maxArticles) {
    const filteredData = articles?.filter(item => item.urlToImage !== null);
    return filteredData?.slice(0, maxArticles);
}
