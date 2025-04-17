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
import {EVENTS} from '../../MockData/events';
import ScrollingAnimation from '../../UI/AnimatedTiles/ExperianceSection';
import VideoHero from "../../UI/Hero/VideoHero";
import TextHero from "../../UI/Hero/TextHero";
import BasicTile from "../../UI/Card/BasicTiles/BasicTile";
import ResortFooter from "../../UI/Footer/ResortLandingFooter";
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
  const celebrations = EVENTS[slug];

  const experience = resortItems.some((item) => item.link === "exp") && EXPERIENCE[slug]?.items;
  const featuredExps = EXPERIENCE[slug]?.items;

  let diningItem = {
    image: "",
    title: "",
    description: "",
    subtitle: ""}
  let eventItem = {
    image: "",
    title: "",
    description: "",
    subtitle: ""}
  let wellnessItem = {
    image: "",
    title: "",
    description: "",
    subtitle: ""}
  if (dinning){
    diningItem.image = dinning.carouselImages[0];
    diningItem.title = dinning.title;
    diningItem.description = dinning.description;
    diningItem.subtitle = "DINING";
  }
  if (celebrations){
    eventItem.image = celebrations.carouselImages[0];
    eventItem.title = celebrations.title;
    eventItem.description = celebrations.description;
    eventItem.subtitle = "CELEBRATION";
  }
  if (wellness){
    wellnessItem.image = wellness.carouselImages[0];
    wellnessItem.title = wellness.title;
    wellnessItem.description = wellness.description;
    wellnessItem.subtitle = "WELLNESS";
  }
  return (
    <div className="resort-details">
      {/* Hero Section */}
      
      <VideoHero videoURL={resort.cover_video} classNames="resort-details-hero" />
      <header className="hgroup">
        <p className="hero-sub_p">{resort.region}</p>
        <h1 className="title-sans hero-sub_h3" style={{textAlign: "center"}}>{resort.name}</h1>

        {/* Details Section */}
        <TextHero classNames="resort-details-text-hero" text={resort.description}/>
      </header>

      {/** Gallery Section */}
      <Row className="gallery m-0">
        <HorizontalCarousel items={galleryImages.slice(2)} />
      </Row>

      {accomidation && (
        <Row className="accomidation gx-2">
          {
            accomidation.accomodations.slice(0, 2).map((item, index)=>(
              <Col md={6} sm={12} >
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
              </Col>
            ))
          }
          <Col xs={12} className="mb-5">
            <Link to="acc">View all accommodation</Link>
          </Col>
         
        </Row>
      )}
      <Row>
        {dinning && (
          <Col md={4} sm={12} >
                <BasicTile 
                  item={diningItem} 
                  index={0} 
                  hasLinks={true}
                  reveresed={false}
                  linkText="Discover More"
                  linkURL={`dining`}
                />
              </Col>
        )}
        {celebrations && (
          <Col md={4} sm={12} >
              <BasicTile 
                item={eventItem} 
                index={0} 
                hasLinks={true}
                reveresed={false}
                linkText="Discover More"
                linkURL={`event`}
              />
            </Col>
        )}
        {wellness && (
          <Col md={4} sm={12} >
              <BasicTile 
                item={wellnessItem} 
                index={0} 
                hasLinks={true}
                reveresed={false}
                linkText="Discover More"
                linkURL={`well`}
              />
            </Col>
        )}
      </Row>
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
    </div>
  );
};

export default ResortDetails;
