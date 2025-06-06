import React from 'react';
import { Container, Row, Col, Form, Button, Nav, InputGroup } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top py-5">
        <Container>
          <Row className="mb-4">
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <div className="footer-widget">
                <h4 className="widget-title"> Nialiving</h4>
                <div className="contact-info">
                  Care@nialiving.in
                  <div className="contact-item">
                    <i className="bi bi-envelope-fill"></i>
                    <span>info@nialiving.com</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <div className="footer-widget">
                
                <Nav className="flex-column footer-links">
                  <Nav.Link href="/" className="footer-link"><i className="bi bi-chevron-right"></i> Terms and Conditions</Nav.Link>
                  <Nav.Link href="/about" className="footer-link"><i className="bi bi-chevron-right"></i> Privacy Policy</Nav.Link>
                  <Nav.Link href="/services" className="footer-link"><i className="bi bi-chevron-right"></i> Return Policy</Nav.Link>
                  <Nav.Link href="/products" className="footer-link"><i className="bi bi-chevron-right"></i> Shipping Policy</Nav.Link>
                  <Nav.Link href="/contact" className="footer-link"><i className="bi bi-chevron-right"></i> Warranty Policy</Nav.Link>
                </Nav>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <div className="footer-widget">
                <Nav className="flex-column footer-links">
                  <Nav.Link href="/services/interior-design" className="footer-link"><i className="bi bi-chevron-right"></i> About Us</Nav.Link>
                  <Nav.Link href="/services/furniture" className="footer-link"><i className="bi bi-chevron-right"></i> Why Us</Nav.Link>
                  <Nav.Link href="/services/consultation" className="footer-link"><i className="bi bi-chevron-right"></i> Our Projects</Nav.Link>
                  <Nav.Link href="/services/renovation" className="footer-link"><i className="bi bi-chevron-right"></i> FAQ</Nav.Link>
                  <Nav.Link href="/services/decoration" className="footer-link"><i className="bi bi-chevron-right"></i> Career</Nav.Link>
                </Nav>
              </div>
            </Col>
            
            <Col lg={3} md={6}>
              <div className="footer-widget">
                <Form className="newsletter-form">
                  <InputGroup className="mb-3">
                    <Form.Control type="email" placeholder="Your email address" required />
                    <Button variant="primary" type="submit" className="newsletter-btn">
                      <i className="bi bi-send-fill"></i>
                    </Button>
                  </InputGroup>
                </Form>
                <div className="social-links mt-3">
                  <a href="https://facebook.com" aria-label="Facebook" className="social-link"><i className="bi bi-facebook"></i></a>
                  <a href="https://twitter.com" aria-label="Twitter" className="social-link"><i className="bi bi-twitter"></i></a>
                  <a href="https://instagram.com" aria-label="Instagram" className="social-link"><i className="bi bi-instagram"></i></a>
                  <a href="https://linkedin.com" aria-label="LinkedIn" className="social-link"><i className="bi bi-linkedin"></i></a>
                  <a href="https://pinterest.com" aria-label="Pinterest" className="social-link"><i className="bi bi-pinterest"></i></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div className="footer-bottom py-3">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="mb-0">&copy; {currentYear} Nialiving. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <div className="footer-bottom-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
                <a href="/sitemap">Sitemap</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;