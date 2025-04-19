import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const ErrorAlert = ({ message }) => {
  return (
    <Container className="my-5">
      <Alert variant="danger">
        <Alert.Heading>Error Loading News</Alert.Heading>
        <p>{message || "Something went wrong. Please try again later."}</p>
      </Alert>
    </Container>
  );
};

export default ErrorAlert;