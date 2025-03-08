import { Container, Row, Col } from "react-bootstrap";
import {useParams} from "react-router-dom";
import Carousel from "../../UI/Carousel";
import { CELEBRATIONSANDEVENTS } from "../../MockData/celebrationsAndEvent";
import BasicTile from "../../UI/Card/BasicTiles/BasicTile";
import TextHero from "../../UI/Hero/TextHero";

const Corporate: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();


    if (!slug) {
        return <div>Resort not found</div>;
    }
    const corporate = CELEBRATIONSANDEVENTS[slug];

    return (
        <Container className="accomidation-page" fluid>
            <Row className="resorts-subpage-hero">
                <Carousel classNames="hero-carousel" slides={corporate.carouselImages} />
            </Row>
            <Row>
                <TextHero classNames=""  text={corporate.description} />
            </Row>

            
            <Row className="listing gx-2" >
                    
                    {
                    corporate.celebrations.map((item, index) => (
                        <Col md={4} sm={12} key={index}><BasicTile item={item} index={index+1} reveresed={index % 2 === 0 ? true: false} hasLinks={!item.isEnquiryForm} linkText={item.linkText} linkURL={item.link} third={true} /></Col>
                    ))
            }
            </Row>
            {
                corporate.venus.length > 0 &&
                <>
                    <Row>
                        <Col>
                            <h1 className="text-center pt-5 fs-1">Our Venues</h1>
                        </Col>
                    </Row>
                    <Row className="listing gx-2" >
                            {
                            corporate.venus.map((item, index) => (
                                <Col md={4} sm={12} key={index}><BasicTile item={item} index={index+1} reveresed={index % 2 === 0 ? true: false} hasLinks={false} third={true}  /></Col> 
                            ))
                    }
                    </Row>
                </>
            }
            
            
        </Container>
        
    )
}
export default Corporate;