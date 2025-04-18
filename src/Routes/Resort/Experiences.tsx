import { Container, Row, Col } from "react-bootstrap";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import Carousel from "../../UI/Carousel";
import { EXPERIENCE } from "../../MockData/experiences";
import BasicTile from "../../UI/Card/BasicTiles/BasicTile";
import TextHero from "../../UI/Hero/TextHero";


const Experiences: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();


    if (!slug) {
        return <div>Resort not found</div>;
    }
    const experiences = EXPERIENCE[slug];
    console.log(experiences)

    return (
        <Container className="accomidation-page" fluid>
            <Row>
                <div className="hero-text" >
                    <h1 
                        style={{
                            textAlign: 'center',
                            fontSize: "1.75rem"
                        }}
                    >{experiences.title}</h1>
                </div>
            </Row>
            <Row className="resorts-subpage-hero">
                <Carousel classNames="hero-carousel" slides={experiences.carouselImages} />
            </Row>
            <Row>
                <TextHero classNames=""  text={experiences.description} />
            </Row>
            <Row>
                <Col sm={12} className="p-0">
                        <BasicTile item={experiences.items[0]} index={1} reveresed={false} hasLinks={false} fullPage={true} square={true} />
                </Col>
            </Row>
            <Row className="listing gx-2" >
                    {
                    experiences.items.slice(1,experiences.items.length).map((item, index) => (
                        <Col md={4} sm={12} key={index}><BasicTile item={item} index={index+1} reveresed={false} hasLinks={false} third={true} /></Col>
                    ))
            }
            </Row>
            
            
            
        </Container>
        
    )
}
export default Experiences;