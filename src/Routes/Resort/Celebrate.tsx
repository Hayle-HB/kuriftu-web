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
                <div className="hero-text" >
                    <h1 
                        style={{
                            textAlign: 'center',
                            fontSize: "1.75rem"
                        }}
                    >{events.title}</h1>
                </div>
            </Row>
            {
                events.detailDescription && (
                    <Row>
                        <TextHero classNames=""  text={events.detailDescription} />
                    </Row>
                )
            }
            

            
            <Row className="listing gx-2" >
                    
                    {
                    events.events.map((item, index) => (
                        <Col md={6} sm={12} key={index}><BasicTile key={index} item={item} index={index+1} reveresed={index % 2 === 0 ? true: false} hasLinks={!item.isEnquiryForm} linkText={item.linkText} linkURL={item.link} square={true} /></Col>
                    ))
            }
               
            </Row>
            {/**
             * {
                events.venus.length > 0 && 
                <><Row>
                    <Col>
                        <h1 className="text-center pt-5 fs-1">Our Venues</h1>
                    </Col>
                </Row>
                <Row className="listing gx-2" >
                        {
                        events.venus.map((item, index) => (
                            <Col md={4} sm={12} key={index}><BasicTile  key={index} item={item} index={index+1} reveresed={index % 2 === 0 ? true: false} hasLinks={false} third={true}  /></Col>
                        ))
                }
                </Row></>
            }
             */}
            
            
        </Container>
        
    )
}
export default Celebrate;