import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Divider from "../svg/Divider";

interface CommonCoverCardProps {
  image: string;
  subTitle: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  descriptionClass?: string;
  titleClass?: string;
  linkClass?: string;
}

const CommonCoverCard: React.FC<CommonCoverCardProps> = ({
  subTitle,
  image,
  title,
  description,
  linkText,
  linkHref,
  descriptionClass = "",
  titleClass = "",
  linkClass = "",
}) => {
  return (
    <Card className="h-100 d-flex flex-column">
      <Card.Img
        variant="top"
        src={image}
        style={{ maxHeight: "32rem", objectFit: "cover",  }}
      />
      <Card.Body className="d-flex flex-column justify-content-between text-start" >
        <div className="landing-cover landing-cover-fix">
          {subTitle && (
            <Card.Subtitle className="mb-2 text-muted" style={{fontFamily: "Neue Helvetica thin",}}>
              {subTitle}
            </Card.Subtitle>
          )}
          <Card.Title
            style={{ textAlign: "start", fontFamily: "Neue Helvetica Medium", }}
            className={`mb-3 text-start ${titleClass}`}
          >
            {title}
          </Card.Title>
          <p className={`mb-4 sm-card-description welness-description ${descriptionClass}`} style={{fontFamily: "Neue Helvetica thin",}}>{description}</p>
        </div>
        {linkText && (
          <div className="d-flex flex-column align-items-center justify-content-center" style={{fontFamily: "Neue Helvetica thin",}}>
                <Link
                  style={{
                  marginTop: "10px",
                  textDecoration: "none", // Remove underline from default styling
                  fontSize: "18px",
                  fontFamily: "Neue Helvetica thin",
                  position: "relative", // Add relative positioning for :after pseudo-element
                }}
                to={linkHref}
                className={`link btn landing-cover btn-link align-self-center btn-link-padding-none ${linkClass}`}
              >
                {linkText}
              </Link>
            {/* <Divider /> */}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CommonCoverCard;
