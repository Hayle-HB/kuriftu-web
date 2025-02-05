import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { aboutUSPageData } from '../MockData/aboutUsPageData';

const AboutUsCard3: React.FC = () => {
  return (
    <Container fluid
     className=" my-5"
     style={{padding :'3.4rem'}}
     >
      <Row className="align-items-center">
        {/* Left Section with Image */}
        <Col md={6} className="p-3">
          <div
            style={{
              backgroundImage: `url(${aboutUSPageData.card4.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              minHeight: '400px',
            }}
          ></div>
        </Col>

        {/* Right Section with Text */}
        <Col md={6} className="p-3">
          <p className='about-headers' style={{fontFamily:'Neue Helvetica Medium'}}>{aboutUSPageData.card4.title}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsCard3;
