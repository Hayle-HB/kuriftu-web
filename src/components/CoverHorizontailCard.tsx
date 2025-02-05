import React from "react";
import { Card } from "react-bootstrap";

interface CoverHorizontalCardProps {
  image: string;
  title: string;
  description: string;
  descriptionClass?:string;
}

const CoverHorizontalCard: React.FC<CoverHorizontalCardProps> = ({
  image,
  title,
  description,
  descriptionClass=""
}) => {
  return (
    <Card className="h-100 d-flex">
      <Card.Img
        variant="top"
        src={image}
        style={{ maxHeight: "38rem", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between text-start">
        <div>
          <Card.Title className="mb-3 advanture-title" style={{fontFamily:'Neue Helvetica Medium', fontWeight:'600'}}>{title}</Card.Title>
          <p className={`mb-4 welness-description ${descriptionClass}`} style={{fontFamily: "Neue Helvetica thin",}}>{description}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CoverHorizontalCard;
