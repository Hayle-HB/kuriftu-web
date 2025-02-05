import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { aboutUSPageData } from "../MockData/aboutUsPageData";

const AboutUSCard1: React.FC = () => {
  return (
    <Container fluid className="p-4">
      <Row className="align-items-center">
        {/* Left Section with Image */}
        <Col md={6} className="p-3">
          <div
            style={{
              backgroundImage: `url(${aboutUSPageData.card2.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              minHeight: "400px",
            }}
          ></div>
        </Col>

        {/* Right Section with Text */}
        <Col md={6} className="p-3">
          <h3 className="mb-4" style={{fontFamily:"Neue Helvetica Medium",fontSize:'19px', lineHeight:'23px', fontStyle:'normal', fontWeight:'600',textAlign:'left', paddingLeft:'12px'}}>{aboutUSPageData.card2.title}</h3>
          <ul className="unstyled">
            {aboutUSPageData.card2.lists.map((item, index) => (
              <li key={index} className="text-start" style={{fontFamily:"Neue Helvetica Medium",fontSize:'18px', lineHeight:'23px', fontStyle:'normal', fontWeight:'400'}}>
                {item}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUSCard1;
