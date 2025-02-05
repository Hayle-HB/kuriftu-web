import { Card, Col, Container, Row } from "react-bootstrap";
import { landingData } from "../MockData/landingPage";
import CommonCoverCard from "../components/CoverCommonCard";
import Header from "../components/Header/Header";
import Divider from "../svg/Divider";
import { Link } from "react-router-dom";
import AvailabilityCheck from "../components/AvailabilityCheck";

export default function LandingPage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="hero-video-container" style={{ position: "relative" }}>
        {/* Video with Default Browser Controls */}
        <video
          className="hero-video"
          width="100%"
          height="650"
          src="/home/homeVideo.mov"
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
        <div className="scards px-3 py-4 mt-4">
          {landingData.resorts.map((item) => (
            <div key={item.title} className="scard-item">
              <CommonCoverCard
                subTitle={item.category}
                title={item.title}
                description={item.description}
                linkText={item.linkText}
                image={item.image}
                linkHref={item.link}
                linkClass="text-center"
              />
            </div>
          ))}
        </div>
        <Row className="px-3 kurifto-sm-view " style={{ marginTop: '4rem' }}>
          <Col sm={12} md={7}>
            <div>
              <img
                className="w-100 kurifto-sm-image h-auto"
                src={landingData.africanVillage.image}
                alt={landingData.africanVillage.title}
                style={{ maxHeight: "600px", objectFit: "cover" }}
              />
            </div>
          </Col>
          <Col
            className="d-flex flex-column align-items-center justify-content-around"
            sm={12}
            md={5}
          >
            <div style={{ textAlign: 'start' }} className="landing-page-headers">
              <h5 style={{ fontFamily: "Neue Helvetica Mediun", fontSize: '51px', fontWeight: '700', lineHeight: '70px', fontStyle: 'normal', color: '#000' }} >{landingData.africanVillage.title}</h5>
              <p className="description-txt" style={{ fontFamily: "Neue Helvetica thin", fontSize: '18px', fontWeight: '400', lineHeight: '27px', fontStyle: 'normal', color: '#000', paddingLeft: '8px', paddingRight: '25px' }} >
                {landingData.africanVillage.description}
              </p>
            </div>
            <div className="d-flex flex-column align-items-center sm-links justify-content-around">
              <Link
                style={{
                  marginTop: "10px",
                  textDecoration: "none", // Remove default underline
                  color: "black",
                  fontSize: "18px",
                  fontFamily: "Neue Helvetica Medium",
                  position: "relative", // Add relative positioning for :after pseudo-element
                }}

                to={landingData.africanVillage.link}
                className="custom-link" // Assign a specific class for styling
              >
                Discover More
              </Link>
              {/* <Divider /> */}

            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
