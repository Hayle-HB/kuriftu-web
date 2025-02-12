import { Card, Col, Container, Row } from "react-bootstrap";
import { aboutUSPageData } from "../MockData/aboutUsPageData";
import CommonCoverCard from "../components/CoverCommonCard";
import Header from "../components/Header/Header";
import Divider from "../svg/Divider";
import { Link } from "react-router-dom";
//import AvailabilityCheck from "../components/AvailabilityCheck";
import AvailabilityCheck from "../UI/AvailabilityCheck/AvailabilityCheck";
import AnimatedCodexElement from "../UI/Codex/codex";
import AnimatedCodexOneElement from "../UI/Codex/codexOne";

export default function AboutPage(): JSX.Element {
  console.log("landing page loaded")
  return (
    <>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            fontSize: "5.6rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          <p className="home-kuriftu-resorts" style={{ fontFamily: "Neue Helvetica Medium", fontSize: '124px', fontWeight: '400', lineHeight: '123px' }}>About Kuriftu Resorts</p>
        </div>
        {/* Details Section */}
      <Row className="description-wrapper m-0">
        <Col md={6} className="description-imageStack-wrapper">
          <div className="description-imageStack">
            <div className="top" style={{backgroundImage: `url(${aboutUSPageData.about.image1})`}}>
            </div>
            <div className="bottom" style={{backgroundImage: `url(${aboutUSPageData.about.image2})`}}>
            </div>
            
          </div>
        </Col>
        <Col md={6} className="description-text">
          <p>{aboutUSPageData.about.description}</p>
        </Col>
      </Row>
        
      
    </>
  );
}
