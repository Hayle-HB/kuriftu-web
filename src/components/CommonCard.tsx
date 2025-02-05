import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface CommonCardProps {
  subTitle: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

const CommonCard: React.FC<CommonCardProps> = ({
  subTitle,
  title,
  description,
  linkText,
  linkHref,
}) => {
  return (
    <Container className="text-center mt-3 ">
      <Row>
        <Col>
          <h6 className="text-uppercase text-muted subtitle-txt" style={{fontFamily:'Neue Helvetica thin'}}>{subTitle}</h6>
          <h2 className="my-3 title-txt" style={{fontFamily:'Neue Helvetica Medium'}}>{title}</h2>
          <p className="mb-4 description-txt" style={{fontFamily:'Neue Helvetica thin', fontSize:'18px', lineHeight:'27px',fontWeight:'400',fontStyle:'normal', color:'#000'}}>{description}</p>
          {linkText && linkHref && (
            <Link to={linkHref} className="text-decoration-underline view-all-accomo " style={{fontFamily:'Neue Helvetica thin'}}>
              {linkText}
            </Link>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CommonCard;
