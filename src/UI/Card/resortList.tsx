import { Col, Card } from 'react-bootstrap';
import React from 'react';

interface Resort {
  id: string | number;
  name: string;
  location: string;
  image: string;
}

interface ResortListCardProps {
  resort: Resort;
}

const ResortListCard: React.FC<ResortListCardProps> = ({ resort }) => {

  return (
    <Col key={resort.id}>
      <Card className="h-100" style={{ backgroundImage: `url(${resort.image})` }} >
        <Card.Body>
          <Card.Title className='title-sans'>{resort.name}</Card.Title>
          <Card.Text>{resort.location}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
};

export default ResortListCard;