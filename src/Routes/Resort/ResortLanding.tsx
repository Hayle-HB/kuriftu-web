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
import {DINING} from '../../MockData/dining';
import {WELLNESS} from '../../MockData/wellness';
import {CELEBRATIONSANDEVENTS} from '../../MockData/celebrationsAndEvent';
import ScrollingAnimation from '../../UI/AnimatedTiles/ExperianceSection';
import VideoHero from "../../UI/Hero/VideoHero";
import TextHero from "../../UI/Hero/TextHero";
import BasicTile from "../../UI/Card/BasicTiles/BasicTile";
const ResortDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <div>Resort not found</div>;
  }
  const resort = RESORTDETAILS[slug];
  const galleryImages = Gallery[slug];
  const accomidation = ACCOMODATIONS[slug];
  const resortItems = ITEMS[slug];
  const dinning = DINING[slug];
  const wellness = WELLNESS[slug];
  const celebrations = CELEBRATIONSANDEVENTS[slug];

  const experience = resortItems.some((item) => item.link === "exp") && EXPERIENCE[slug]?.items;
  const featuredExps = EXPERIENCE[slug]?.items;

  console.log(galleryImages);
  return (
    <div className="resort-details">
      {/* Hero Section */}
      
      <VideoHero videoURL={resort.cover_video} classNames="resort-details-hero" />
      <p>{resort.region}</p>
      <h1 className="title-sans" style={{textAlign: "center"}}>{resort.name}</h1>

      {/* Details Section */}
      <TextHero classNames="resort-details-text-hero" text={resort.description}/>

      {/** Gallery Section */}
      <Row className="gallery m-0">
        <HorizontalCarousel items={galleryImages.slice(2)} />
      </Row>

      {accomidation && (
        <Row className="accomidation">
          {
            accomidation.accomodations.map((item, index)=>(
              <BasicTile 
                item={item} 
                index={index} 
                hasLinks={true}
                reveresed={false}
                linkText="Explore"
                linkURL={`acc/${index + 1}`}
                half={true}
                square={true}
              />
            ))
          }
         
        </Row>
      )}
      {experience && (
        <section>
          <h1 style={{textAlign: "center", marginBottom: "55px", marginTop:"68px"}}>Featured Experiences</h1>
          <Row>
            {
            featuredExps.map((item, index) => (
              <Col sm={12} md={4}>
                <BasicTile
                item={item} 
                index={index} 
                hasLinks={true}
                reveresed={false}
                linkText="Explore"
                linkURL="exp"
                third={true}
              />
              </Col>
            ))

          }
          </Row>
        </section>
      )}
      {
        dinning &&(
          <Container fluid className="dining-tile-wrapper">
              <Row className="dining-tile">
                <Col className="dining-tile-text-wrapper" sm={12} md={6}>
                    <h1>{dinning.title}</h1>
                    <p>{dinning.description}</p>
                </Col>
                <Col className="dining-tile-image-wrapper" sm={12} md={6}>
                    <img className="dining-tile-image" src={dinning.carouselImages[0]} />
                </Col>
              </Row>
              <Row>
                <Link to='dining'>Explore More</Link>
              </Row>
          </Container>
        )
      }
      {wellness &&
      <Container className="content-wrapper">
          <Row className={`content`}>
            <Col className="image" md={6}>
              <img src={wellness.gallery[0]} alt={wellness.title} />
            </Col>
            <Col className="text" md={6}>
              <h2 className="title-sans">{wellness.title}</h2>
              <p>{wellness.description}</p>
              <Link to='well'>Learn More</Link>
            </Col>
          </Row>
      </Container>
      }
      {celebrations && 
        <Container className="content-wrapper">
          <Row className={`content content-reversed`}>
            <Col className="image" md={6}>
              <img src={celebrations.carouselImages[0]} alt={celebrations.title}/>
            </Col>
            <Col className="text" md={6}>
              <h2 className="title-sans">{celebrations.title}</h2>
              <p>{celebrations.description}</p>
              <Link to='event'>Learn More</Link>
            </Col>
          </Row>
      </Container>
      }

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
            <img src={resort.cover_image} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResortDetails;
