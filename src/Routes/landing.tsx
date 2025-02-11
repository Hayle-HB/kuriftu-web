import { Card, Col, Container, Row } from "react-bootstrap";
import { landingData } from "../MockData/landingPage";
import CommonCoverCard from "../components/CoverCommonCard";
import Header from "../components/Header/Header";
import Divider from "../svg/Divider";
import { Link } from "react-router-dom";
//import AvailabilityCheck from "../components/AvailabilityCheck";
import AvailabilityCheck from "../UI/AvailabilityCheck/AvailabilityCheck";
import AnimatedCodexElement from "../UI/Codex/codex";
import AnimatedCodexOneElement from "../UI/Codex/codexOne";

export default function LandingPage(): JSX.Element {
  console.log("landing page loaded")
  return (
    <>
      <Header />
      <div className="hero-video-container" style={{ position: "relative" }}>
        {/* Video with Default Browser Controls */}
        <video
          className="hero-video"
          width="100%"
          height="650"
          src="https://kuriftu-public-media.s3.amazonaws.com/main720.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            pointerEvents: "none", // Prevents user interaction
          }}
          onContextMenu={(e) => e.preventDefault()} // Disables right-click menu
        ></video>

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
          <p
            className="home-welcome"
            style={{
              fontSize: "24px",
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontFamily: "Neue Helvetica thin",
              fontWeight: "400",
              fontStyle: 'normal',
              lineHeight: '24px',
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Welcome to
          </p>
          <p className="home-kuriftu-resorts" style={{ fontFamily: "Neue Helvetica Medium", fontSize: '124px', fontWeight: '400', lineHeight: '123px' }}>Kuriftu Resorts</p>
        </div>

        <div
          className="availability-check-wrapper"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            maxWidth: "1300px",
          }}
        >
          <AvailabilityCheck />
        </div>
      </div>

      <Container fluid>
        <AnimatedCodexElement classname="landing__codex content--wrapper" contentData={landingData.resorts} />
        <AnimatedCodexOneElement classname="landing__codex content__one__wrapper" contentData={landingData.africanVillage} />
      </Container>
    </>
  );
}
