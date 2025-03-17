import React from "react";
import { Card, Button, Row, Col, Placeholder } from "react-bootstrap";



const RoomCardPH: React.FC = ({}) => {
  return (
    <Card
      className="mb-4 shadow-sm room-card"
      style={{ border: "none", textAlign: "left" }}
    >
      <Row>
        <Col md={5}>
        <Placeholder as={Card.Img} animation="glow" className="room-card-image"
          style={{
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover', 
          }}></Placeholder>        
        </Col>
        <Col md={7}>
          <Card.Body>
            <Row>
              <Col>
                <Placeholder as={Card.Title} animation="glow" className="fw-bold section-header-font">
                    <Placeholder xs={6} />
                </Placeholder>
              </Col>
            </Row>
            
            <Row>
              <Col>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col className="text-end">
               <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder.Button variant="dark" />
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default RoomCardPH;