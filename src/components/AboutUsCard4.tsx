import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUsCard4: React.FC = () => {
  return (
    <Container fluid style={{ padding: "2.5rem" }} className="about-cards">
      <Row
        className="g-4 m-4 about-content justify-content-center"
        style={{ backgroundColor: "#ffffff", borderRadius: "15px", padding: "20px" }}
      >
        {/* Image Section - Appears First on Mobile */}
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            src="https://kurifturesorts.com/_nuxt/img/NewAwards.b2869ef.jpg"
            alt="Awards"
            style={{
              width: "100%",
              aspectRatio: "16/10", // ✅ Ensures responsiveness
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Col>

        {/* Contact Us Section - Stacks Below on Mobile */}
        <Col xs={12} md={6} className="d-flex flex-column justify-content-center text-center text-md-end">
          <ul
            className="list-unstyled"
            style={{
              lineHeight: "1.5rem",
              fontWeight: 500,
              fontSize: "0.9rem",
              fontFamily: "Neue Helvetica",
              padding: "10px",
            }}
          >
            <li style={{ fontWeight: 600, fontSize: "1rem" }}>Banquet & Sales</li>
            <li>0116678792</li>
            <li style={{ fontWeight: 600, fontSize: "1rem" }}>Central Reservation</li>
            <li>+251 911091185</li>
            <li>+251 116230605/04</li>
            <li style={{ fontWeight: 600, fontSize: "1rem" }}>Kuriftu Resort & Spa Entoto</li>
            <li>+251 905061020</li>
            <li>+251 905053151/52</li>
            <li style={{ fontWeight: 600, fontSize: "1rem" }}>Kuriftu Resort & Spa Bishoftu</li>
            <li>+251 924949494</li>
            <li style={{ fontWeight: 600, fontSize: "1rem" }}>Kuriftu Resort & Spa Lake Tana</li>
            <li>+251 920959797</li>
            <li style={{ fontWeight: 600, fontSize: "1rem" }}>Kuriftu Resort & Spa Awash Falls</li>
            <li>+251 944448800</li>
            <li style={{ fontWeight: 600, fontSize: "1rem" }}>Boston Day Spa</li>
            <li>+251 116636557</li>
            <li>+251 116623808</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsCard4;
