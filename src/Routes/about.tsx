import { Card, Col, Container, Row } from "react-bootstrap";
import { aboutUSPageData } from "../MockData/aboutUsPageData";
import ImageHero from "../UI/Hero/ImageHero";
import BasicIconTile from "../UI/Card/BasicTiles/BasicIconTile";
import {EyeIcon, TargetIcon, HeartIcon} from '../svg/Icons';
export default function AboutPage(): JSX.Element {
  console.log("about page loaded")
  let icons = [EyeIcon, TargetIcon, HeartIcon] ;
  return (
    <Container className="about-page" fluid>
        <ImageHero classNames="about-page-hero" title={aboutUSPageData.hero.title} image={aboutUSPageData.hero.image} />
        {/* Details Section */}
        <Row className="accomidation">
          <div className="accomidation-img" style={{backgroundImage: `url(${aboutUSPageData.about.image1})`}}></div>
          <div className="accomidation-text">

            <h1>{aboutUSPageData.about.title}</h1>
            <p>{aboutUSPageData.about.description}</p>
          </div>
        </Row>
        <Row>
            {
                aboutUSPageData.mission.map((item, index)=>(
                    <BasicIconTile
                        key={index}
                        item={item}
                        icon={icons[index]}
                        reveresed={false}
                        hasLinks={false}
                        third={true}
                     />
                ))
            }
        </Row>
        
    </Container>
  );
}
