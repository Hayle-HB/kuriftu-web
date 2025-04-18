import { Container, Row, Col } from "react-bootstrap";
import {useParams} from "react-router-dom";
import Carousel from "../../UI/Carousel";
import { CELEBRATIONSANDEVENTS } from "../../MockData/celebrationsAndEvent";
import BasicTile from "../../UI/Card/BasicTiles/BasicTile";
import TextHero from "../../UI/Hero/TextHero";
import ListHero from "../../UI/Hero/ListHero";

const Corporate: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();


    if (!slug) {
        return <div>Resort not found</div>;
    }
    const corporate = CELEBRATIONSANDEVENTS[slug];

    return (
        <Container className="accomidation-page" fluid>
            <Row>
                <div className="hero-text" >
                    <h1 
                        style={{
                            textAlign: 'center',
                            fontSize: "1.75rem"
                        }}
                    >{corporate.title}</h1>
                </div>
            </Row>
            
            <Row>
                <TextHero classNames=""  text={corporate.description} />
            </Row>
            {
                corporate.venus.length > 0 &&
                <>
                    <Row className="listing gx-2" >
                            {
                            corporate.venus.map((item, index) => (
                                <Col md={6} sm={12} key={index}><BasicTile item={item} index={index+1} reveresed={index % 2 === 0 ? true: false} hasLinks={false} square={true}  /></Col> 
                            ))
                    }
                    </Row>
                </>
            }
            {corporate.facilities && <ListHero classNames="" list={corporate.facilities} title="Our Meeting Facilities Include" column={3}/>}

            
            
        </Container>
        
    )
}
export default Corporate;