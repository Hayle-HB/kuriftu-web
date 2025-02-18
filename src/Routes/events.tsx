import { Container, Row, Col } from "react-bootstrap";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import Carousel from "../UI/Carousel";
import { eventPageData } from "../MockData/eventPageData";
import BasicTile from "../UI/Card/BasicTiles/BasicTile";


const Event: React.FC = () => {
    
    console.log(eventPageData)

    return (
        <Container className="accomidation-page" fluid>
            <Row className="resorts-subpage-hero">
                <Carousel classNames="hero-carousel" slides={eventPageData.carouselImages} />
            </Row>
            <Row>
                <p>{eventPageData.subtitle}</p>
            </Row>
            <Row>
                <h1 className="title-sans" style={{textAlign: "center"}}>{eventPageData.title}</h1>
            </Row>
            
            <Row className="listing" >
                    {
                    eventPageData.events.map((item, index) => (
                        <BasicTile item={item} index={index+1} reveresed={false} hasLinks={true} linkText={item.linkText} linkURL={item.link} third={true} />
                    ))
            }
            </Row>
            
            
            
        </Container>
        
    )
}
export default Event;