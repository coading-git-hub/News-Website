import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-0">Global News</h5>
            <p className="text-muted small mb-0">Your trusted news source</p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center">
              <a href="/" className="text-light mx-2"><i className="bi bi-facebook fs-4"></i></a>
              <a href="/" className="text-light mx-2"><i className="bi bi-twitter fs-4"></i></a>
              <a href="/" className="text-light mx-2"><i className="bi bi-instagram fs-4"></i></a>
              <a href="https://www.linkedin.com/in/kiran-ahmedraza-1a952127b/" className="text-light mx-2"><i className="bi bi-linkedin fs-4"></i></a>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <p className="mb-0 small">© {new Date().getFullYear()} Global News. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;