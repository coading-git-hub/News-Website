import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { searchNews } from '../services/newsApi';
import NewsCard from '../components/NewsCards';
import Loader from '../components/Loader';
import ErrorAlert from '../components/ErrorAlert';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Format category name for display
  const formatCategoryName = (name) => {
    if (!name || typeof name !== 'string') return ''; 
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  
  

  useEffect(() => {
    // Reset state when category changes
    setArticles([]);
    setPage(1);
    setLoading(true);
    setError(null);
    setHasMore(true);
  }, [categoryName]);

  useEffect(() => {
    const loadCategoryNews = async () => {
      try {
        setLoading(true);
        const data = await searchNews(categoryName, 'us', page);
        
        if (data.status === 'ok') {
          if (page === 1) {
            setArticles(data.articles);
          } else {
            setArticles(prev => [...prev, ...data.articles]);
          }
          
      
          setHasMore(data.articles.length > 0);
        } else {
          setError(data.message || `Failed to fetch ${categoryName} news`);
        }
      } catch (err) {
        setError('Network error. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadCategoryNews();
  }, [categoryName, page]);

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  if (error && articles.length === 0) {
    return <ErrorAlert message={error} />;
  }

  return (
    <Container>
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-8 px-0">
        <h1 className="display-4 fst-italic">
  {categoryName ? formatCategoryName(categoryName) : 'Category'} News
</h1>

<p className="lead my-3">
  Latest articles and updates from the world of {categoryName || 'category'}.
</p>
        </div>
      </div>

      {articles.length > 0 ? (
        <>
          <Row xs={1} md={2} lg={3} className="g-4">
            {articles.map((article, idx) => (
              <Col key={idx}>
                <NewsCard article={article} />
              </Col>
            ))}
          </Row>

          <div className="text-center my-5">
            {loading && <Loader />}
            
            {!loading && hasMore && (
              <Button 
              variant="primary" 
              onClick={loadMore} 
              disabled={loading}
            >
              Load More {categoryName ? formatCategoryName(categoryName) : 'Category'} News
            </Button>
            
            )}
            
            {!loading && !hasMore && articles.length > 0 && (
              <p className="text-muted">You've reached the end of the news feed</p>
            )}
          </div>
        </>
      ) : loading ? (
        <Loader />
      ) : (
        <div className="text-center my-5">
          <p>No {categoryName} articles found. Please try again later.</p>
        </div>
      )}
    </Container>
  );
};

export default CategoryPage;
