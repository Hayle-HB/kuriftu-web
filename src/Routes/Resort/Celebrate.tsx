import { Container, Row, Col } from "react-bootstrap";
import {useParams} from "react-router-dom";
import Carousel from "../../UI/Carousel";
import { EVENTS } from "../../MockData/events";
import BasicTile from "../../UI/Card/BasicTiles/BasicTile";
import TextHero from "../../UI/Hero/TextHero";

const Celebrate: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();


    if (!slug) {
        return <div>Resort not found</div>;
    }
    const events = EVENTS[slug];
    console.log(events);

    return (
        <Container className="accomidation-page" fluid>
            <Row>
                <Carousel classNames="hero-carousel" slides={events.carouselImages} />
            </Row>
            <Row>
                <TextHero classNames=""  text={events.description} />
            </Row>

            
            <Row className="listing" >
                    
                    {
                    events.events.map((item, index) => (
                        <BasicTile item={item} index={index+1} reveresed={index % 2 === 0 ? true: false} hasLinks={!item.isEnquiryForm} linkText={item.linkText} linkURL={item.link} third={true} />
                    ))
            }
               
            </Row>
            <Row>
                <Col>
                    <h1 className="text-center pt-5 fs-1">Our Venues</h1>
                </Col>
            </Row>
            <Row className="listing" >
                    {
                    events.venus.map((item, index) => (
                        <BasicTile item={item} index={index+1} reveresed={index % 2 === 0 ? true: false} hasLinks={false} third={true}  />
                    ))
            }
            </Row>
            
        </Container>
        
    )
}
export default Celebrate;