import { Container, Row, Col } from "react-bootstrap";
import {useParams} from "react-router-dom";
import Carousel from "../../UI/Carousel";
import { DINING } from "../../MockData/dining";
import BasicTile from "../../UI/Card/BasicTiles/BasicTile";
import TextHero from "../../UI/Hero/TextHero";

const Dinnign: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();


    if (!slug) {
        return <div>Resort not found</div>;
    }
    const dining = DINING[slug];
    console.log(dining);

    return (
        <Container className="accomidation-page" fluid>
            <Row>
                <Carousel classNames="hero-carousel" slides={dining.carouselImages} />
            </Row>
            <Row>
                <TextHero classNames=""  text={dining.description} />
            </Row>

            <Row>
                <Col>
                    <h1 className="text-center pt-5 fs-1">Dining Options</h1>
                </Col>
            </Row>
            <Row className="listing" >
                <Col>
                    
                    {
                    dining.diningOptions.map((item, index) => (
                        <BasicTile item={item} index={index+1} reveresed={index % 2 === 0 ? true: false} hasLinks={true} linkText="Explore Menu" linkURL={item.menuLink} />
                    ))
            }
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="text-center pt-5 fs-1">Dining Experience</h1>
                </Col>
            </Row>
            <Row className="listing" >
                <Col>
                    {
                    dining.diningExperiences.map((item, index) => (
                        <BasicTile item={item} index={index+1} reveresed={index % 2 === 0 ? true: false} hasLinks={false} />
                    ))
            }
                </Col>
            </Row>
            
        </Container>
        
    )
}
export default Dinnign;