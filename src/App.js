// App.js - REMOVE the Router
import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import CategoryPage from './Pages/CategoryPage';
import ArticlePage from './Pages/ArticlePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';


function App() {
  return (
    
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />
      <main className="flex-grow-1">
        <Container className="py-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/article/:articleId/:articleSlug" element={<ArticlePage />} />
            <Route path="/search/:searchTerm" element={<CategoryPage/>} />
            <Route path="*" element={
              <div className="text-center py-5">
                <h2>Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
              </div>
            } />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;