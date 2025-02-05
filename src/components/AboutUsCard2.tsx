import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { aboutUSPageData } from "../MockData/aboutUsPageData";

const AboutUSCard2: React.FC = () => {
  return (
    <Container fluid className="about-images my-5" style={{ padding: "3.4rem" }}>
      <Row className="align-items-center d-flex flex-wrap">
        {/* Left Section with Image */}
        <Col md={6} sm={12} className="d-flex justify-content-center">
          <div
            style={{
              backgroundImage: `url(${aboutUSPageData.card3.images[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              aspectRatio: "16/11", // ✅ Responsive height based on width
              borderRadius: "10px",
            }}
          ></div>
        </Col>

        {/* Right Section with Image */}
        <Col md={6} sm={12} className="d-flex justify-content-center mt-3 mt-md-0">
          <div
            style={{
              backgroundImage: `url(${aboutUSPageData.card3.images[1]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              aspectRatio: "16/11", // ✅ Maintains responsiveness
              borderRadius: "10px",
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUSCard2;
