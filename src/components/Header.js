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
          <Row className={`w-100 mb-2 align-items-center top-header-row ${scrolled ? 'hidden' : ''}`}>
            <div className="d-flex align-items-center justify-content-between header-elements-wrapper">
              <div className="header-logo">
                <Navbar.Brand href="/" className="brand">
                  <span className="brand-text">Nialiving</span>
                </Navbar.Brand>
              </div>
              
              <div className="header-search">
                <div className="position-relative search-input-group">
                  <i className="bi bi-search position-absolute search-icon"></i>
                  <Form.Control
                    placeholder="Search For a Product"
                    aria-label="Search"
                    className="search-input"
                  />
                </div>
              </div>
              
              <div className="header-made-in-india">
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
              </div>
            </div>
          </Row>
          
          {/* Bottom row with navigation and icons */}
          <Row className={`w-100 ${scrolled ? '' : 'pt-2'} nav-row`}>
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
                  <Nav className="d-flex flex-row flex-wrap justify-content-center w-100">
                    <Nav.Link href="/living-room" className="nav-item">LIVING ROOM</Nav.Link>
                    <Nav.Link href="/dining-room" className="nav-item">DINING ROOM</Nav.Link>
                    <Nav.Link href="/bedroom" className="nav-item">BED ROOM</Nav.Link>
                    <Nav.Link href="/bathroom" className="nav-item">BATH ROOM</Nav.Link>
                    <Nav.Link href="/home-office" className="nav-item">HOME OFFICE</Nav.Link>
                    <Nav.Link href="/kids" className="nav-item">KIDS</Nav.Link>
                    <Nav.Link href="/home-decors" className="nav-item">HOME DECOR & ESSENTIALS</Nav.Link>
                    <Nav.Link href="/sale" className="nav-item">SALE</Nav.Link>
                  </Nav>
                  
                  {/* Icons - only show when not scrolled */}
                  {!scrolled && (
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-end mt-3 mt-lg-0">
                      <Nav.Link href="/wishlist" className="mx-2 text-dark position-relative">
                        <i className="bi bi-heart fs-5" title="Wishlist"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          0
                        </span>
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
                      <Nav.Link href="/support" className="mx-2 text-dark">
                        <i className="bi bi-headset fs-5" title="User Support"></i>
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