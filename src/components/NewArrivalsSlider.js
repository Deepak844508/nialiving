import React from 'react';
import Slider from 'react-slick';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewArrivalsSlider.css';

const NewArrivalsSlider = () => {
  // Sample product data - replace with your actual data
  const newArrivals = [
    {
      id: 1,
      title: "Modern Accent Chair",
      category: "Living Room",
      price: 249.99,
      oldPrice: 299.99,
      rating: 4.5,
      reviews: 24,
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      badge: "New",
      btnText: "LIVING ROOM"
    },
    {
      id: 2,
      title: "Minimalist Bedside Table",
      category: "Bedroom",
      price: 129.99,
      oldPrice: 179.99,
      rating: 5,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      badge: "Sale",
      btnText: "SALE"
    },
    {
      id: 3,
      title: "Scandinavian Dining Set",
      category: "Dining",
      price: 599.99,
      oldPrice: null,
      rating: 4,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      badge: null,
      btnText: "HOME OFFICE"
    },
    {
      id: 4,
      title: "Luxury Sofa Set",
      category: "Living Room",
      price: 1299.99,
      oldPrice: 1499.99,
      rating: 4.5,
      reviews: 56,
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      badge: "Bestseller",
      btnText: "DINING ROOM"
    },
    {
      id: 5,
      title: "Wooden Coffee Table",
      category: "Living Room",
      price: 349.99,
      oldPrice: 399.99,
      rating: 4.7,
      reviews: 32,
      image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      badge: "New",
      btnText: "KIDS"
    },
    {
      id: 6,
      title: "Modern Desk Lamp",
      category: "Home Office",
      price: 89.99,
      oldPrice: 119.99,
      rating: 4.3,
      reviews: 28,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      badge: "Sale",
      btnText: "HOME"
    }
  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Changed from 3 to 4 as requested
    slidesToScroll: 1,
    autoplay: true,
    arrows: true, // Enable navigation arrows
    autoplaySpeed: 3000,
    cssEase: 'linear',
    variableWidth: false,
    centerMode: false,
    swipeToSlide: true,
    touchThreshold: 10,
    centerPadding: '0px',
    slidesMargin: 10,
    slidesToFit: true,
    margin: 10,
    padding: 0,
    gutter: 10,
    slidesSpacing: 10,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3, // Show 3 on large screens
          slidesToScroll: 1,
          centerPadding: '0px',
          margin: 10,
          padding: 0,
          gutter: 10,
          slidesSpacing: 10
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2, // Show 2 on medium screens
          slidesToScroll: 1,
          centerPadding: '0px',
          margin: 10,
          padding: 0,
          gutter: 10,
          slidesSpacing: 10
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 on small screens
          slidesToScroll: 1,
          centerPadding: '0px',
          margin: 10,
          padding: 0,
          gutter: 10,
          slidesSpacing: 10
        }
      }
    ]
  };

  // Function to render star ratings
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="bi bi-star-fill"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="bi bi-star-half"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="bi bi-star"></i>);
    }
    
    return stars;
  };



  return (
    <>
      <section className="category-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={12} className="text-center mb-5">
              <h2 className="section-title">SHOP BY CATEGORY</h2>
            </Col>
          </Row>
        </Container>
        
        <div className="category-slider-container">
          <Slider {...settings} className="category-slider">
            {newArrivals.map(product => (
              <div key={product.id} className="category-item">
                <Card className="category-card">
                  <Card.Body className="p-0">
                    <Card.Img variant="top" src={product.image} className="category-image" />
                    <div className="category-overlay">
                      <Button className="category-btn no-border-radius">{product.btnText}</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default NewArrivalsSlider;