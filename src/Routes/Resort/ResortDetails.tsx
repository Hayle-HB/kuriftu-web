// src/pages/ResortDetails.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { resortDetails } from "../../Data/resort";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "../../UI/Carousel";

const ResortDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <div>Resort not found</div>;
  }
  const resort = resortDetails[slug];
  return (
    <div className="resort-details">
      {/* Hero Section */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${resort.cover_image})` }}
      >
        <h1 className="title-sans">{resort.name}</h1>
        <p>{resort.region}</p>
        <Link to={`/reservation?resort=${slug}`}>BOOK NOW</Link>
      </div>

      {/* Details Section */}
      <Row className="description-wrapper">
        <Col md={6} className="description-imageStack-wrapper">
          <div className="description-imageStack">
            <img
              className="top"
              src={
                resort.description?.image &&
                Array.isArray(resort.description.image)
                  ? resort.description.image[0]
                  : "https://kurifturesorts.com/_nuxt/img/4.61f4fcb.jpg"
              }
            />
            <img
              className="bottom"
              src={
                resort.description?.image &&
                Array.isArray(resort.description.image)
                  ? resort.description.image[1]
                  : "https://kurifturesorts.com/_nuxt/img/9.e53335f.jpg"
              }
            />
          </div>
        </Col>
        <Col md={6} className="description-text">
          <h2 className="title-sans">{resort.description?.title}</h2>
          <p>{resort.description?.text}</p>
        </Col>
      </Row>

      {/** Gallery Section */}
      <Row className="gallery">
        <Carousel slides={resort.gallery}></Carousel>
      </Row>
      <Container className="content-wrapper">
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
