// src/pages/ResortDetails.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import {RESORTDETAILS} from "../MockData/resortsDetails";
import {Gallery} from "../MockData/gallery";
import { Container, Col, Row } from "react-bootstrap";
import HorizontalCarousel from "../UI/HorizontalCarousel";
import {ACCOMODATIONS} from '../MockData/accomdations';
import {ITEMS} from '../MockData/items';
import {EXPERIENCE} from '../MockData/experiences';
import {DINING} from '../MockData/dining';
import {WELLNESS} from '../MockData/wellness';
import {CELEBRATIONSANDEVENTS} from '../MockData/celebrationsAndEvent';
import ScrollingAnimation from '../UI/AnimatedTiles/ExperianceSection';
import { bostonHomeData } from "../MockData/bostonHomeData";

import VideoHero from "../UI/Hero/VideoHero";
import TextHero from "../UI/Hero/TextHero";
import BasicTile from "../UI/Card/BasicTiles/BasicTile";
import ListHero from "../UI/Hero/ListHero";
import MultiItemCarousel from "../UI/Carousel/MultiItemCarousel";
const BostonLanding: React.FC = () => {
  const slug = 'boston';

  const resort = RESORTDETAILS[slug];
  const galleryImages = Gallery[slug];
  
  

  console.log(bostonHomeData);
  return (
    <div className="resort-details boston">
      {/* Hero Section */}
      
      <VideoHero videoURL={resort.cover_video} classNames="resort-details-hero" />
      <p>{resort.region}</p>
      <h1 className="title-sans" style={{textAlign: "center"}}>{resort.name}</h1>

      {/* Details Section */}
      <TextHero classNames="resort-details-text-hero" text={resort.description}/>

      {/** Items */}
      <Row className="row-container">
        {
            bostonHomeData.items.map((item, index) => (
                <Col md={4} sm={12} ><BasicTile item={item} index={index} hasLinks={false} reveresed={false} third={true} /></Col>
            ))
        }
      </Row>
      {/** Services */}
       <Container className="boston-services row-container" fluid>
            <Row className="boston-services-heading">
                <h1>Our Services</h1>
            </Row>
            <Row >
                <Col sm={12}>
                <MultiItemCarousel classNames="landing-carousel" items={bostonHomeData.experiences}/>
                </Col>
            </Row>
        </Container>
      {/** Facilities */}
      <Row className="row-container">
        <ListHero classNames="boston-facilities" title="Our Facilities" list={bostonHomeData.facilities}column={3} />
      </Row>

      {/** Gallery Section */}
      <Row>
        <Col>
            <h1 style={{textAlign: "center"}}>Gallery</h1>
        </Col>
      </Row>
      <Row className="gallery m-0 mb-5 row-container">
        <HorizontalCarousel items={galleryImages.slice(2)} />
      </Row>

      
      
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
            <img src={resort.cover_image} alt="women getting a facial treatment." />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BostonLanding;
