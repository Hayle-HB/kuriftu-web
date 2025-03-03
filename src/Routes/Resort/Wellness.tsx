import { Container, Row, Col } from "react-bootstrap";
import {useParams} from "react-router-dom";
import Carousel from "../../UI/Carousel";
import { WELLNESS } from "../../MockData/wellness";
import BasicTile from "../../UI/Card/BasicTiles/BasicTile";
import TextHero from "../../UI/Hero/TextHero";
import ListHero from "../../UI/Hero/ListHero";

const Wellness: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();


    if (!slug) {
        return <div>Resort not found</div>;
    }
    const wellness = WELLNESS[slug];
    console.log(wellness);

    return (
        <Container className="accomidation-page" fluid>
            <Row className="resorts-subpage-hero">
                <Carousel classNames="hero-carousel" slides={wellness.carouselImages} />
            </Row>
            <Row>
                <TextHero classNames=""  text={wellness.description} />
            </Row>

            <ListHero classNames="" list={wellness.facilities} title="Facilities" />
            
            <Row className="listing gx-2" >
                    {
                    wellness.wellness.map((item, index) => (
                       <Col md={4} sm={12} key={index}><BasicTile item={item} index={index+1} reveresed={false} hasLinks={false} third={true}  /></Col> 
                    ))
            }
            </Row>
            
        </Container>
        
    )
}
export default Wellness;