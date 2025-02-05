import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

interface RoomCardProps {
  title: string;
  location: string;
  description: string;
  //  amenities: string[];
  price: number;
  availability: string;
  image: string;
  onSelect: () => void;
  descriptionClass?: string;

}

const RoomCard: React.FC<RoomCardProps> = ({
  title,
  location,
  description,
  // amenities,
  price,
  availability,
  image,
  onSelect,
  descriptionClass = "",

}) => {
  return (
    <Card
      className="mb-4 shadow-sm"
      style={{ border: "none", textAlign: "left" }}
    >
      <Row>
        <Col md={5}>
        <Card.Img
          src={image}
          alt={title}
          style={{
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover', 
          }}
        />          
        </Col>
        <Col md={7}>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title className="fw-bold section-header-font" style={{fontFamily: "Neue Helvetica Medium",}}>
                  {title}
                </Card.Title>
                <Card.Subtitle className="text-muted mb-2">
                  {location}
                </Card.Subtitle>
              </Col>
              <Col className="text-end text-danger fw-bold" style={{fontFamily: "Neue Helvetica Medium",}}>{availability}</Col>
            </Row>
            <p className={`mb-4 welness-description ${descriptionClass}`} style={{fontFamily: "Neue Helvetica thin ",fontSize:'11px'}}>{description}</p>
            <Row className="align-items-center">
              <Col className="text-end">
                <h5 className="fw-bold" style={{fontFamily: "Neue Helvetica Medium",}}>
                  ${price} <small className="text-muted" style={{fontFamily: "Neue Helvetica thin",}}>per Night</small>
                </h5>
                <Button variant="dark" onClick={onSelect}
                style={{fontFamily: "Neue Helvetica Medium",}}
                >
                  Select Room
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default RoomCard;
