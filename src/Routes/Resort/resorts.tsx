import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {resorts} from "../../Data/resort";
import HeroMap from "../../UI/Map/HeroMap";
import ResortListCard from "../../UI/Card/resortList";
import { Link } from 'react-router-dom';


// ResortsPage component
const ResortsPage: React.FC = () => {
    return (
        <Container fluid className="p-0 resort-page">
            
            {/* Hero Component */}
            <Row className='hero-wrapper'>
                <Col className="hero-message" md={5}>
                    <h1 className="title-sans">Explore Our Destinations</h1>
                    <p className="hero-subtitle">Your unforgettable adventure starts here</p>
                </Col>
                <Col className="hero-image" md={7}>
                    <HeroMap />
                </Col>
            </Row>
            

            {/* Resorts Tiles */}
            <Container className="mt-5">
                <h2></h2>
                <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                    {resorts.map((resort) => (
                        <Link to={`/resorts/${resort.slug}`}>
                            <ResortListCard resort={resort} />
                        </Link>
                        
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default ResortsPage;
