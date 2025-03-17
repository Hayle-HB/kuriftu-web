import { Col, Container, Row } from "react-bootstrap";
import Carousel from "../UI/Carousel";
import { ExperiencePage } from "../MockData/experiences";
import BasicTile from "../UI/Card/BasicTiles/BasicTile";

export default function Experience(){
    return <Container className="accomidation-page" fluid>
            <Row className="resorts-subpage-hero">
                <Carousel classNames="hero-carousel" slides={ExperiencePage.carouselImages} />
            </Row>
            <Row>
                <p>{ExperiencePage.subtitle}</p>
            </Row>
            <Row>
                <h1 className="title-sans" style={{textAlign: "center"}}>{ExperiencePage.title}</h1>
            </Row>
            
            <Row className="listing" >
                    {
                    ExperiencePage.items.map((item, index) => (
                        <Col md={6} sm={12} key={index}><BasicTile item={item} index={index+1} reveresed={false} hasLinks={true} linkText={item.linkText} linkURL={item.linkURL} /></Col>
                    ))
            }
            </Row>
            
            
            
        </Container>
}