import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { contactData } from "../MockData/contactUsData";

const ContactUsCard1: React.FC = () => {
  return (
    <Container fluid className="py-5 contact-sm" style={{marginTop:'5%'}}>
      <Row className="align-items-center mt-5 ">
        {/* Left Column (Text + Form) */}
        <Col xs={12} md={6} >
          {/* Centered Title & Subtitle */}
          <h3 className="text-center contact-header" style={{ fontSize: "26px", fontWeight: "600", color: "#c2874a", fontFamily:"Neue Helvetica Medium",fontStyle:'normal', lineHeight:'26px' }}>
            Contact Us
          </h3>
          <p className="text-center contact-para" style={{ fontSize: "18px", fontFamily:"Neue Helvetica thin", marginBottom: "1.5rem" }}>
            Send us a message and we'll get back to you right away!
          </p>

          {/* Form */}
          <Form className="text-start">
            <Row>
              <Col xs={12} md={6} className="mb-3">
                <Form.Group controlId="formFirstName">
                  <Form.Label className="contact-para" style={{ fontSize: "18px", fontWeight: "400",fontFamily:"Neue Helvetica thin", }}>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <Form.Group controlId="formLastName">
                  <Form.Label className="contact-para" style={{ fontSize: "18px", fontFamily:"Neue Helvetica thin", fontWeight: "400" }}>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} className="mb-3">
                <Form.Group controlId="formPhone">
                  <Form.Label className="contact-para" style={{ fontSize: "18px", fontFamily:"Neue Helvetica thin", fontWeight: "400" }}>Phone</Form.Label>
                  <Form.Control type="text" placeholder="Phone" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <Form.Group controlId="formEmail">
                  <Form.Label className="contact-para" style={{ fontSize: "18px", fontFamily:"Neue Helvetica thin", fontWeight: "400" }}>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label className="contact-para" style={{ fontSize: "18px", fontFamily:"Neue Helvetica thin", fontWeight: "400" }}>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Message" />
            </Form.Group>
            <div className="text-center my-2">
            <Button variant="outline-dark" type="submit" style={{ color: "#c2874a", fontFamily:"Neue Helvetica thin", border: "0.5px solid #c2874a", textAlign:'center' }}>
              SEND MESSAGE
            </Button>
            </div>
           
          </Form>
        </Col>

        {/* Right Column (Image) */}
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center contact-image">
          <img
            src={contactData.image2}
            alt="Contact Us"
            className="img-fluid"
            style={{
              width: "100%",
              maxWidth: "800px",
              aspectRatio: "16/9",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsCard1;
