import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({ article }) => {
  // Format the published date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Generate a unique slug for the article link
  const generateSlug = (title) => {
    return title
      ? encodeURIComponent(
          title
            .toLowerCase()
            .replace(/[^\w\s]/gi, '')
            .replace(/\s+/g, '-')
        )
      : 'article';
  };

  const articleSlug = generateSlug(article.title);
  const articleId = article.url ? encodeURIComponent(article.url) : articleSlug;

  return (
    <Card className="h-100 shadow-sm hover-effect">
      <div className="position-relative">
        {article.urlToImage ? (
          <Card.Img 
            variant="top" 
            src={article.urlToImage} 
            alt={article.title}
            style={{ height: '150px', objectFit: 'cover' }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x200?text=News+Image';
            }}
          />
        ) : (
          <Card.Img 
            variant="top" 
            src="https://images.barrons.com/im-02915116?width=700&size=1.5005861664712778/300x200?text=News+Image" 
            alt="Placeholder" 
            style={{ height: '150px', objectFit: 'cover' }}
          />
        )}
        {article.source?.name && (
          <Badge 
            bg="primary" 
            className="position-absolute top-0 end-0 m-2"
          >
            {article.source.name}
          </Badge>
        )}
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-5 fw-bold mb-2">{article.title}</Card.Title>
        <Card.Text className="text-muted small mb-2">
          {formatDate(article.publishedAt)}
        </Card.Text>
        <Card.Text className="text-truncate-3">
          {article.description || "No description available"}
        </Card.Text>


        <div className="mt-auto pt-3">
          <Link 
            to={`/article/${articleId}/${articleSlug}`} 
            className="btn btn-sm btn-outline-primary"
            state={{ article }}
          >
            Read More
          </Link>
        </div>

        
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
