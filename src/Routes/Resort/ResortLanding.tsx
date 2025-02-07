// src/pages/ResortDetails.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import {RESORTDETAILS} from "../../MockData/resortsDetails";
import {Gallery} from "../../MockData/gallery";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "../../UI/Carousel";
import HorizontalCarousel from "../../UI/HorizontalCarousel";
import {ACCOMODATIONS} from '../../MockData/accomdations';
import {ITEMS} from '../../MockData/items';
import {EXPERIENCE} from '../../MockData/experiences';
import ScrollingAnimation from '../../UI/AnimatedTiles/ExperianceSection';

const ResortDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <div>Resort not found</div>;
  }
  const resort = RESORTDETAILS[slug];
  const galleryImages = Gallery[slug];
  const accomidation = ACCOMODATIONS[slug];
  const resortItems = ITEMS[slug];

  const experience = resortItems.some((item) => item.link === "exp") && EXPERIENCE[slug]?.featured;
  const featuredExps = EXPERIENCE[slug]?.featured;

  console.log(slug);
  return (
    <div className="resort-details">
      {/* Hero Section */}
      
      <div
        className="hero"
        style={{ backgroundImage: `url(${resort.cover_image})` }}
      >
        <video
          key={resort.cover_video}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: "cover", width: "100%", height: "100vh",   
          pointerEvents: "none", // Prevents user interaction
          }}
          onContextMenu={(e) => e.preventDefault()} 
        >
          <source src={resort.cover_video}  />
        </video>
        <h1 className="title-sans">{resort.name}</h1>
        <p>{resort.region}</p>
        <Link to={`/reservation?resort=${slug}`}>BOOK NOW</Link>
      </div>

      {/* Details Section */}
      <Row className="description-wrapper">
        <Col md={6} className="description-imageStack-wrapper">
          <div className="description-imageStack">
            <div className="top" style={{backgroundImage: `url(${galleryImages.length > 0 ? galleryImages[0]:resort.cover_image})`}}>
            </div>
            <div className="bottom" style={{backgroundImage: `url(${galleryImages.length > 1 ? galleryImages[1]:resort.cover_image})`}}>
            </div>
            
          </div>
        </Col>
        <Col md={6} className="description-text">
          <p>{resort.description}</p>
        </Col>
      </Row>

      {/** Gallery Section */}
      <Row className="gallery">
        <HorizontalCarousel items={galleryImages.slice(2)} />
      </Row>
      {accomidation && (
        <Row className="accomidation">
          <div className="accomidation-img" style={{backgroundImage: `url(${accomidation.accomodations[0].image})`}}></div>
          <div className="accomidation-text">
            <h3>Featured Accommodiation</h3>
            <h1>{accomidation.accomodations[0].title}</h1>
            <p>{accomidation.accomodations[0].description}</p>
            <Link to='acc'>Explore</Link>
          </div>
        </Row>
      )}
      {experience && (
        <ScrollingAnimation
            featuredExps={featuredExps}
         />
      )}

      {/**
       * 
       * <Container className="content-wrapper">
          <Row className={`content content-reversed`}>
            <Col className="image" md={6}>
              <img src={experience.image} />
            </Col>
            <Col className="text" md={6}>
              <h2 className="title-sans">{experience.title}</h2>
              <p>{experience.description}</p>
              <Link to='exp'>Explore more Experiences</Link>
            </Col>
          </Row>
      </Container>
       * <Container className="content-wrapper">
        <h1 className="title-sans">Latest Offers</h1>
        {resort.content?.map((content, index) => (
          <Row className={`content ${index % 2 != 0 && "content-reversed"}`}>
            <Col className="image" md={6}>
              <img src={content.image} />
            </Col>
            <Col className="text" md={6}>
              <h4 className="title-sans">{content.title}</h4>
              <p>{content.text}</p>
              <a href="#">
                <i>BOOK NOW</i>
              </a>
            </Col>
          </Row>
        ))}
      </Container>
       */}
      <Container className="contact-wrapper" fluid>
        <Row>
          <Col md={6}>
            <h1 className="title-sans">Contact Us</h1>
            <div className="contact-text">
              <p>
                <i className="bi bi-geo-alt"></i>
                {resort.address}
              </p>
              <p>
                <i className="bi bi-telephone"></i>
                {resort.phone}
              </p>
              <p>
                <i className="bi bi-envelope"></i>
                {resort.email}
              </p>
            </div>
          </Col>
          <Col md={6} className="contact-image">
            <img src="https://kurifturesorts.com/_nuxt/img/17.d92b745.jpg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResortDetails;
