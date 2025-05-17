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

    return (
        <Container className="accomidation-page" fluid>
            <Row>
                <div className="hero-text" >
                    <h1 
                        style={{
                            textAlign: 'center',
                            fontSize: "1.75rem"
                        }}
                    >{wellness.title}</h1>
                </div>
            </Row>
            <Row className="resorts-subpage-hero">
                <Carousel classNames="hero-carousel" slides={wellness.carouselImages} />
            </Row>
            {
                wellness.detailedDescription && (
                    <Row>
                        <TextHero classNames=""  text={wellness.detailedDescription} />
                    </Row>
                )
            }
            

            <ListHero classNames="" list={wellness.facilities} title="Our Facilities" column={3}/>
            
            <Row className="listing gx-2" >
                    {
                    wellness.wellness.map((item, index) => (
                       <Col sm={12} key={index}><BasicTile item={item} index={index+1} reveresed={false} reverese={index%2===0?true: false} hasLinks={false} landscape={true} fullPage={true} /></Col> 
                    ))
            }
            </Row>
            
        </Container>
        
    )
}
export default Wellness;