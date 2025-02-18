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
            <Row>
                <Carousel classNames="hero-carousel" slides={wellness.carouselImages} />
            </Row>
            <Row>
                <TextHero classNames=""  text={wellness.description} />
            </Row>

            <ListHero classNames="" list={wellness.facilities} title="Details & Facilities" />
            
            <Row className="listing" >
                    {
                    wellness.wellness.map((item, index) => (
                        <BasicTile item={item} index={index+1} reveresed={index % 2 === 0 ? true: false} hasLinks={false} third={true}  />
                    ))
            }
            </Row>
            
        </Container>
        
    )
}
export default Wellness;