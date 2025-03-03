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
import VideoHero from "../UI/Hero/VideoHero";
import BasicTile from "../UI/Card/BasicTiles/BasicTile";
import MultiItemCarousel from "../UI/Carousel/MultiItemCarousel";
import HorizontalCarousel from "../UI/HorizontalCarousel";
import LinkTile from "../UI/Card/BasicTiles/LinkTile";

export default function LandingPage(): JSX.Element {
  console.log("landing page loaded")
  return (
    < >
        <VideoHero classNames="landing-hero" videoURL={landingData.video} />
        <Row className="landing-section1 gx-5">
          
            {
              landingData.section1.map((item, index)=>{
                console.log(item);
                return (
                      <Col key={index} md={4} sm={12}>
                        <LinkTile 
                        item={item}
                        index={index}
                        reveresed={false}
                        hasLinks={true}
                        linkText={item.linkText}
                        linkURL={item.link}
                        third={true}
                        textLimit={130}
                      />
                      </Col>
                )
              })
            }
        </Row>
        <section className="landing-section">
            <Row >
            <Col sm={12} md={3}>
              <h1>Inspirational locations</h1>
              <p>This year, embark on grand adventures, encountering new dimensions spurred by the spirit of Kuriftu Resorts.</p>
            </Col>
            <Col sm={12} md={9}>
              <MultiItemCarousel classNames="landing-carousel" items={landingData.section2}/>
            </Col>
          </Row>
        </section>
        
    </>
  );
}
