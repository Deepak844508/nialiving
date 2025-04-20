import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FullWidthFurnitureImage.css';

const FullWidthFurnitureImage = () => {
  return (
    <section className="full-width-furniture-section">
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col className="p-0">
            <div className="furniture-image-container">
              <img 
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Elegant Furniture Collection" 
                className="furniture-banner-image"
              />
              <div className="furniture-text-overlay">
                <h2 className="furniture-heading">BE FIRST TO EXPLORE OUR NEW ARRIVAL</h2>
              </div>
              <div className="furniture-button-container">
                <button className="transparent-btn">EXPLORE NOW</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FullWidthFurnitureImage;