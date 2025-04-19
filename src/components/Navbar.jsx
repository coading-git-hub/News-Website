import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      
      const lowerSearch = searchTerm.toLowerCase();
      const categories = ['business', 'technology', 'health', 'sports', 'entertainment'];
      const matchedCategory = categories.find(category => 
        category.toLowerCase() === lowerSearch || 
        category.toLowerCase().includes(lowerSearch)
      );
      
      if (matchedCategory) {
        navigate(`/category/${matchedCategory}`);
      } 
      else {
        navigate(`/search/${searchTerm}`);
      }
      
      setSearchTerm('');
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <i className="bi bi-newspaper me-2"></i>
          Global News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/category/business">Business</Nav.Link>
            <Nav.Link as={Link} to="/category/technology">Technology</Nav.Link>
            <Nav.Link as={Link} to="/category/health">Health</Nav.Link>
            <Nav.Link as={Link} to="/category/sports">Sports</Nav.Link>
            <Nav.Link as={Link} to="/category/entertainment">Entertainment</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search by title or category..."
              className="me-2"
              style={{ minWidth: "250px" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-light" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;