import './App.css';
import Layout from './components/Layout';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './components/AccordionStyles.css';
import NewArrivalsSlider from './components/NewArrivalsSlider';
import HeroSlider from './components/HeroSlider';
import FullWidthFurnitureImage from './components/FullWidthFurnitureImage';
import './components/NewArrivalsSlider.css'; // Import for project highlights styles
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* Hero Slider Section */}
        <HeroSlider />
        
        {/* New Arrivals Slider (Shop by Category) */}
        <NewArrivalsSlider />
        
        {/* Full Width Furniture Image Section */}
        <FullWidthFurnitureImage />
        
        {/* Features Section */}
        {/* <section className="features-section py-5">
          <Container>
            <div className="section-header text-center mb-5">
              <span className="section-subtitle">What We Offer</span>
              <h2 className="section-title">Our Premium Services</h2>
              <div className="section-divider"></div>
              <p className="section-description">Discover how we can help transform your living spaces with our comprehensive range of services</p>
            </div>
            
            <Row>
              <Col lg={4} md={6} className="mb-4">
                <Card className="feature-card">
                  <div className="feature-icon-wrapper">
                    <i className="bi bi-house-heart feature-icon"></i>
                  </div>
                  <Card.Body>
                    <Card.Title>Interior Design</Card.Title>
                    <Card.Text>
                      Professional interior design services to create beautiful and functional living spaces tailored to your style and needs.
                    </Card.Text>
                    <a href="/services" className="feature-link">Learn More <i className="bi bi-arrow-right"></i></a>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col lg={4} md={6} className="mb-4">
                <Card className="feature-card">
                  <div className="feature-icon-wrapper">
                    <i className="bi bi-box-seam feature-icon"></i>
                  </div>
                  <Card.Body>
                    <Card.Title>Premium Furniture</Card.Title>
                    <Card.Text>
                      High-quality, stylish furniture pieces that combine comfort, durability, and aesthetic appeal for your home.
                    </Card.Text>
                    <a href="/products" className="feature-link">Learn More <i className="bi bi-arrow-right"></i></a>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col lg={4} md={12} className="mb-4">
                <Card className="feature-card">
                  <div className="feature-icon-wrapper">
                    <i className="bi bi-headset feature-icon"></i>
                  </div>
                  <Card.Body>
                    <Card.Title>Expert Consultation</Card.Title>
                    <Card.Text>
                      Personalized consultation services to help you make informed decisions about your home improvement projects.
                    </Card.Text>
                    <a href="/contact" className="feature-link">Learn More <i className="bi bi-arrow-right"></i></a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section> */}
        
        {/* About Section */}
        {/* <section className="about-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div className="about-image-container">
                  <div className="about-image"></div>
                  <div className="about-experience">
                    <span className="years">15+</span>
                    <span className="text">Years of Experience</span>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="about-content">
                  <span className="section-subtitle">About Us</span>
                  <h2 className="section-title">Creating Beautiful Spaces Since 2010</h2>
                  <div className="section-divider"></div>
                  <p className="about-text">
                    At Nialiving, we believe that everyone deserves to live in a space that reflects their personality and meets their needs. Our team of experienced professionals is dedicated to helping you transform your living spaces into beautiful, functional environments.
                  </p>
                  <ul className="about-features">
                    <li><i className="bi bi-check2-circle"></i> Premium Quality Products</li>
                    <li><i className="bi bi-check2-circle"></i> Expert Design Consultation</li>
                    <li><i className="bi bi-check2-circle"></i> Custom Furniture Solutions</li>
                    <li><i className="bi bi-check2-circle"></i> Exceptional Customer Service</li>
                  </ul>
                  <Button variant="primary" className="about-btn">Discover Our Story</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
        
        {/* Featured Products Section */}
        <section className="products-section py-5">
          <Container>
            <div className="section-header text-center mb-5">
              <h2 className="section-title">OUR LATEST PRODUCTS</h2>
            </div>
            
            {/* First row of products */}
            <Row>
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Nami Round Wall Shelf</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$299.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/furniture/bedside-table.jpg"} />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Minimalist Bedside Table</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$129.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Scandinavian Dining Set</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$599.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Luxury Sofa Set</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$1,299.99</span>
                  </div>
                </div>
              </Col>
            </Row>
            
            {/* Second row of products */}
            <Row>
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Modern Coffee Table</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$249.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/furniture/desk-lamp.jpg"} />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Elegant Desk Lamp</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$89.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/furniture/bookshelf.jpg"} />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Wooden Bookshelf</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$399.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Velvet Armchair</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$349.99</span>
                  </div>
                </div>
              </Col>
            </Row>
            
            {/* Third row of products */}
            <Row>
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Marble Dining Table</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$899.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Pendant Light Fixture</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$159.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Leather Ottoman</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$199.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Modern Dresser</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$499.99</span>
                  </div>
                </div>
              </Col>
            </Row>
            
            {/* Fourth row of products */}
            <Row>
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Geometric Wall Art</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$149.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Minimalist Desk</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$379.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Floating Shelves Set</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$129.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1493150134366-cacb0bdc03fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Accent Chair</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$279.99</span>
                  </div>
                </div>
              </Col>
            </Row>
            
            {/* Fifth row of products */}
            <Row>
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Modern Desk Lamp</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$89.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Wooden Coffee Table</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$349.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Modern Living Room Set</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$2,499.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Minimalist Bedside Table</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$129.99</span>
                  </div>
                </div>
              </Col>
            </Row>
            
            {/* Sixth row of products */}
            <Row>
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Ceramic Vase Set</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$79.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Bathroom Vanity</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$699.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Kitchen Island</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$899.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Outdoor Dining Set</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$1,199.99</span>
                  </div>
                </div>
              </Col>
            </Row>
            
            {/* Seventh row of products */}
            <Row>
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Rattan Lounge Chair</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$449.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>King Size Bed Frame</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$799.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Minimalist Bedside Table</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$129.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Dining Chairs Set</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$499.99</span>
                  </div>
                </div>
              </Col>
            </Row>
            
            {/* Eighth row of products */}
            <Row>
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Modern Dresser</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$499.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Nami Round Wall Shelf</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$299.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Scandinavian Dining Set</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$599.99</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
               <div>
                <Card className="product-card p-0" style={{ height: '300px' }}>
                  <div className="product-badge">MADE TO ORDER</div>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="mt-auto">
                      <div className="d-flex" style={{ borderTop: '2px solid #c9c9c9' }}>
                        <Button className="btn-shop w-100 py-2">Buy Now</Button>
                        <div style={{ borderRight: '2px solid #c9c9c9' }}></div>
                        <Button className="btn-shop w-100 py-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                                                      
                  <div className="d-flex flex-column mt-4 mb-3">
                      <span className="prod-name" style={{color:'#757575'}}>Luxury Sofa Set</span>
                      <span className="prod-price" style={{fontWeight:'bold'}}>$1,299.99</span>
                  </div>
                </div>
              </Col>
            </Row>
            

          </Container>
        </section>
        
        {/* Project Highlights Section */}
        <section className="project-highlights-section py-4 my-3">
          <Container fluid className="px-3">
            <div className="section-header text-center mb-4">
              <h2 className="section-title">OUR PROJECT HIGHLIGHTS</h2>
            </div>
            
            <Row className="g-2">
              <Col lg={4} md={6} className="px-1">
                <div className="project-highlight-item">
                  <img 
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Modern Living Space"
                    className="project-highlight-image"
                  />
                  <div className="arrow-circle">
                    <div className="arrow-right">&#10132;</div>
                  </div>
                  <div className="project-text-container">
                    <div className="project-title">Furniture Remodelling</div>
                    <div className="project-subtitle">Company</div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="px-1">
                <div className="project-highlight-item">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Luxury Bedroom"
                    className="project-highlight-image"
                  />
                  <div className="arrow-circle">
                    <div className="arrow-right">&#10132;</div>
                  </div>
                  <div className="project-text-container">
                    <div className="project-title">House Renovation</div>
                    <div className="project-subtitle">Company</div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12} className="px-1">
                <div className="project-highlight-item">
                  <img 
                    src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Designer Kitchen"
                    className="project-highlight-image"
                  />
                  <div className="arrow-circle">
                    <div className="arrow-right">&#10132;</div>
                  </div>
                  <div className="project-text-container">
                    <div className="project-title">General Carpentry</div>
                    <div className="project-subtitle">Company</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        
        {/* Story That Connect Us Section */}
        <section className="story-connect-section py-5">
          <Container>
            <Row className="justify-content-center">
              <Col md={12} className="text-center mb-5">
                <h2 className="section-title">STORY THAT CONNECT US</h2>
                
              </Col>
            </Row>
          </Container>
          
          <div className="category-slider-container no-slick-dots">
            <Slider 
              dots={false}
              dotsClass="slick-dots custom-hide-dots"
              infinite={true}
              speed={500}
              slidesToShow={4}
              slidesToScroll={1}
              autoplay={true}
              arrows={true}
              autoplaySpeed={3000}
              cssEase="linear"
              className="category-slider no-dots"
              responsive={[
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]}
            >
              <div className="category-item">
                <Card className="category-card">
                  <Card.Body className="p-0">
                    <Card.Img 
                      variant="top" 
                      src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                      className="category-image" 
                    />
                    <div className="category-overlay">
                      <div className="button-wrapper">
                        <button className="white-button">John Smith</button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              
              <div className="category-item">
                <Card className="category-card">
                  <Card.Body className="p-0">
                    <Card.Img 
                      variant="top" 
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                      className="category-image" 
                    />
                    <div className="category-overlay">
                      <div className="button-wrapper">
                        <button className="white-button">Emily Johnson</button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              
              <div className="category-item">
                <Card className="category-card">
                  <Card.Body className="p-0">
                    <Card.Img 
                      variant="top" 
                      src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                      className="category-image" 
                    />
                    <div className="category-overlay">
                      <div className="button-wrapper">
                        <button className="white-button">Michael Chen</button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              
              <div className="category-item">
                <Card className="category-card">
                  <Card.Body className="p-0">
                    <Card.Img 
                      variant="top" 
                      src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                      className="category-image" 
                    />
                    <div className="category-overlay">
                      <div className="button-wrapper">
                        <button className="white-button">Sarah Williams</button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              
              <div className="category-item">
                <Card className="category-card">
                  <Card.Body className="p-0">
                    <Card.Img 
                      variant="top" 
                      src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                      className="category-image" 
                    />
                    <div className="category-overlay">
                      <div className="button-wrapper">
                        <button className="white-button">David Rodriguez</button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
            <div className="text-center mt-4">
              <a href="#" className="view-all-link view-all-underlined" style={{textDecoration: 'underline'}}>View All</a>
            </div>
          </div>
        </section>
        
        {/* Our Latest Articles Section */}
        <section className="latest-articles-section py-5">
          <Container>
            <Row className="justify-content-center">
              <Col md={12} className="text-center mb-5">
                <h2 className="section-title">OUR LATEST ARTICLES</h2>
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={6} className="mb-4">
                <Card className="article-card">
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body>
                    <Card.Title className="article-title">Buy Wooden Cabinets Online at the Best Prices in India</Card.Title>
                    
                    <Card.Text className="article-excerpt">
                    In today’s digital world, shopping for furniture has become super easy and convenient. Whether you're setting up a new home or</Card.Text>
                    <a href="#" className="article-link">READ MORE</a>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6} className="mb-4">
                <Card className="article-card">
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body>
                    <Card.Title className="article-title">Affordable Wooden Double Beds:Where to Buy the Best Deals</Card.Title>
                    
                    <Card.Text className="article-excerpt">
                    A wooden double bed is a timeless addition to any bedroom. It provides comfort, durability, and a touch of elegance to your space.                    </Card.Text>
                    <a href="#" className="article-link">READ MORE</a>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6} className="mb-4">
                <Card className="article-card">
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                  <Card.Body>
                    <Card.Title className="article-title">Best Wooden Dining Table Designs to Match Your Home Style</Card.Title>
                    
                    <Card.Text className="article-excerpt">
                    A dining table is more than just a piece of furniture; it is the heart of your home where family and friends gather to share meals and                    </Card.Text>
                    <a href="#" className="article-link">READ MORE</a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="text-center mt-4">
              <a href="#" className="view-all-link view-all-underlined" style={{textDecoration: 'underline'}}>View All</a>
            </div>
          </Container>
        </section>
        

        
       <section>
       
       <div className="text-center mb-4">
  <h2 className="h4">Faqs</h2>
</div>
        <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="w-100">
            <div className="w-100 d-flex justify-content-between align-items-center">
                <div>Why is Niya Living?</div>
                <div className="rotate"><i className="bi bi-arrow-right"></i></div>
            </div>
            </Accordion.Header>
            <Accordion.Body>
            Niya Living is a furniture and home decor brand that combines creativity, craftsmanship, and 
            innovation to design unique home pieces.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="w-100">
            <div className="w-100 d-flex justify-content-between align-items-center">
                <div>What types of furniture does does Nia Living offer?</div>
                <div className="rotate"><i className="bi bi-arrow-right"></i></div>
            </div>
            </Accordion.Header>
            <Accordion.Body>
            Niya Living offers a variety of home furniture and decor items, all crafted with quality materials and designs.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="w-100">
            <div className="w-100 d-flex justify-content-between align-items-center">
                <div>How can I place an order?</div>
                <div className="rotate"><i className="bi bi-arrow-right"></i></div>
            </div>
            </Accordion.Header>
            <Accordion.Body>
            Orders can be placed directly through the website by selecting your preferred items and proceeding to checkout.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="w-100">
            <div className="w-100 d-flex justify-content-between align-items-center">
                <div>What payment methods are accepted?</div>
                <div className="rotate"><i className="bi bi-arrow-right"></i></div>
            </div>
            </Accordion.Header>
            <Accordion.Body>
            Most major payment options, including credit/debit cards and UPI, are likely accepted.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="w-100">
            <div className="w-100 d-flex justify-content-between align-items-center">
                <div>What types of wood are used in Nia Living furniture</div>
                <div className="rotate"><i className="bi bi-arrow-right"></i></div>
            </div>
            </Accordion.Header>
            <Accordion.Body>
            Niya Living uses high-quality wood such as Acacia, sheesham, mango, and engineered wood for durability and aesthetics.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header className="w-100">
            <div className="w-100 d-flex justify-content-between align-items-center">
                <div>Is solid wood furniture better than engineered wood?</div>
                <div className="rotate"><i className="bi bi-arrow-right"></i></div>
            </div>
            </Accordion.Header>
            <Accordion.Body>
            Solid wood furniture is more durable and long-lasting, while engineered wood is cost-effective and resistant to moisture.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header className="w-100">
            <div className="w-100 d-flex justify-content-between align-items-center">
                <div>How should I clean my wooden furniture?</div>
                <div className="rotate"><i className="bi bi-arrow-right"></i></div>
            </div>
            </Accordion.Header>
            <Accordion.Body>
            Use a soft, damp cloth for dusting and avoid harsh chemicals or excessive water.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header className="w-100">
            <div className="w-100 d-flex justify-content-between align-items-center">
                <div>Is wooden furniture eco-friendly?</div>
                <div className="rotate"><i className="bi bi-arrow-right"></i></div>
            </div>
            </Accordion.Header>
            <Accordion.Body>
            Sustainable wood sources and recycled materials make wooden furniture an eco-friendly choice.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header className="w-100">
            <div className="w-100 d-flex justify-content-between align-items-center">
                <div>Does Nia Living provide a warranty on wooden furniture?</div>
                <div className="rotate"><i className="bi bi-arrow-right"></i></div>
            </div>
            </Accordion.Header>
            <Accordion.Body>
            Warranty policies depend on the product. Check with Niya Living’s customer support for specific details.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header className="w-100">
            <div className="w-100 d-flex justify-content-between align-items-center">
                <div>Are wooden beds durable?</div>
                <div className="rotate"><i className="bi bi-arrow-right"></i></div>
            </div>
            </Accordion.Header>
            <Accordion.Body>
            Yes, solid wood beds last for decades and provide strong support compared to metal or engineered wood beds.

            </Accordion.Body>
          </Accordion.Item>
              
        </Accordion>
        </Container>
       </section>


      </Layout>
    </div>
  );
}

export default App;
