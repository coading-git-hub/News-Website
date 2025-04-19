import React from 'react';
import { Spinner, Container } from 'react-bootstrap';

const Loader = () => {
  return (
    <Container className="text-center my-5 py-5">
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="mt-2">Loading news articles...</p>
    </Container>
  );
};

export default Loader;