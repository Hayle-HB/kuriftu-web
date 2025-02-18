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
                <Carousel classNames="hero-carousel" slides={experiences.carouselImages} />
            </Row>
            <Row>
                <TextHero classNames=""  text={experiences.description} />
            </Row>
            <Row className="listing" >
                    {
                    experiences.items.map((item, index) => (
                        <BasicTile item={item} index={index+1} reveresed={index % 2 === 0 ? true: false} hasLinks={false} third={true} />
                    ))
            }
            </Row>
            
            
            
        </Container>
        
    )
}
export default Experiences;