import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Form, InputGroup, Button, Row, Col, Image } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true when page is scrolled down more than 100px
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header>
      <Navbar 
        bg="white" 
        expand="lg" 
        className={`header py-3 ${scrolled ? 'scrolled' : ''}`} 
        fixed="top"
      >
        <Container className="header-container">
          {/* Top row with logo, search bar, and Made in India logo */}
          <Row className={`w-100 mb-3 align-items-center top-header-row ${scrolled ? 'hidden' : ''}`}>
            <Col xs={12} md={3} className="d-flex align-items-center mb-3 mb-md-0">
              <Navbar.Brand href="/" className="brand">
                <span className="brand-text">Nialiving</span>
              </Navbar.Brand>
            </Col>
            
            <Col xs={12} md={6} className="mb-3 mb-md-0 d-flex align-items-center justify-content-center">
              <div className="position-relative search-input-group">
                <i className="bi bi-search position-absolute search-icon"></i>
                <Form.Control
                  placeholder="Search For a Product"
                  aria-label="Search"
                  className="search-input"
                />
              </div>
            </Col>
            
            <Col xs={12} md={3} className="d-flex justify-content-center justify-content-md-end align-items-center mb-3 mb-md-0">
              <div className="made-in-india">
                <Image 
                  src="/make-in-india-logo-png_seeklogo-379725.png" 
                  alt="Made in India" 
                  width="80" 
                  height="60" 
                  className="d-block mx-auto" 
                />
                <span className="d-block text-center mt-1">Made in India</span>
              </div>
            </Col>
          </Row>
          
          {/* Bottom row with navigation and icons */}
          <Row className={`w-100 ${scrolled ? '' : 'border-top pt-3'} nav-row`}>
            <Col xs={12}>
              <div className={`d-flex align-items-center ${scrolled ? 'justify-content-between' : ''}`}>
                {/* Always show the logo when scrolled */}
                {scrolled && (
                  <Navbar.Brand href="/" className="brand me-4">
                    <span className="brand-text">Nialiving</span>
                  </Navbar.Brand>
                )}
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={`mb-2 mb-lg-0 ${scrolled ? 'ms-auto' : ''}`} />
              
                <Navbar.Collapse id="basic-navbar-nav" className={scrolled ? 'scrolled-nav' : ''}>
                  {/* Navigation links */}
                  <Nav className={`${scrolled ? 'ms-auto' : 'me-auto'} d-flex flex-row flex-wrap`}>
                    <Nav.Link href="/living-room" className="mx-2">Living Room</Nav.Link>
                    <Nav.Link href="/dining-room" className="mx-2">Dining Room</Nav.Link>
                    <Nav.Link href="/bedroom" className="mx-2">Bed Room</Nav.Link>
                    <Nav.Link href="/bathroom" className="mx-2">Bath Room</Nav.Link>
                    <Nav.Link href="/home-office" className="mx-2">Home Office</Nav.Link>
                    <Nav.Link href="/kids" className="mx-2">Kids</Nav.Link>
                    <Nav.Link href="/home-decors" className="mx-2">Home Decors & Essentials</Nav.Link>
                    <Nav.Link href="/sale" className="mx-2">Sale</Nav.Link>
                  </Nav>
                  
                  {/* Icons - only show when not scrolled */}
                  {!scrolled && (
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-end mt-3 mt-lg-0">
                      <Nav.Link href="/support" className="mx-2 text-dark">
                        <i className="bi bi-headset fs-5" title="Contact Support"></i>
                      </Nav.Link>
                      <Nav.Link href="/wishlist" className="mx-2 text-dark">
                        <i className="bi bi-heart fs-5" title="Wishlist"></i>
                      </Nav.Link>
                      <Nav.Link href="/cart" className="mx-2 text-dark position-relative">
                        <i className="bi bi-cart3 fs-5" title="Cart"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          0
                        </span>
                      </Nav.Link>
                      <Nav.Link href="/account" className="mx-2 text-dark">
                        <i className="bi bi-person fs-5" title="My Account"></i>
                      </Nav.Link>
                    </div>
                  )}
                </Navbar.Collapse>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;