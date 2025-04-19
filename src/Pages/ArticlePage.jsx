import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import {  useLocation, Link } from 'react-router-dom';

const ArticlePage = () => {
  const { state } = useLocation();

  const article = state?.article;

  // Format the published date
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    return dateString ? new Date(dateString).toLocaleDateString(undefined, options) : 'Unknown date';
  };

  if (!article) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h2>Article not found</h2>
          <p>Sorry, we couldn't find the article you're looking for.</p>
          <Link to="/" className="btn btn-primary mt-3">
            Return to Homepage
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="mb-4">
            <Link to="/" className="text-decoration-none">
              <i className="bi bi-arrow-left me-2"></i>Back to Headlines
            </Link>
          </div>
          
          <h1 className="mb-3">{article.title}</h1>
          
          <div className="d-flex align-items-center mb-4">
            {article.source?.name && (
              <Badge bg="primary" className="me-2">
                {article.source.name}
              </Badge>
            )}
            <small className="text-muted">
              Published on {formatDate(article.publishedAt)}
            </small>
            {article.author && (
              <small className="text-muted ms-3">
                By {article.author}
              </small>
            )}
          </div>

          {article.urlToImage && (
            <Card className="border-0 mb-4">
              <Card.Img 
                src={article.urlToImage} 
                alt={article.title}
                className="img-fluid rounded"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x400?text=News+Image';
                }}
              />
              {article.title && (
                <Card.Footer className="bg-white border-0">
                  <small className="text-muted">{article.title}</small>
                </Card.Footer>
              )}
            </Card>
          )}

          <div className="article-content">
            <p className="lead mb-4">{article.description}</p>
            <div className="mb-4">{article.content || "No content available for this article. Please visit the original source for the full article."}</div>
            
            {article.url && (
              <div className="mt-5">
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline-primary"
                >
                  Read Full Article at Source <i className="bi bi-box-arrow-up-right ms-1"></i>
                </a>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlePage;