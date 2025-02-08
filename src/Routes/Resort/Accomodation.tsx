import { Container, Row, Col } from "react-bootstrap";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import Carousel from "../../UI/Carousel";
import { ACCOMODATIONS } from "../../MockData/accomdations";
import BasicTile from "../../UI/Card/BasicTiles/BasicTile";


const Accomidation: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();


    if (!slug) {
        return <div>Resort not found</div>;
    }
    const accomidation = ACCOMODATIONS[slug];
    console.log(accomidation)

    return (
        <Container className="accomidation-page" fluid>
            <Row>
                <div className="hero" style={{ backgroundImage: `url(${accomidation.accomodations[0].image})` }} >
                    <h1>{accomidation.title}</h1>
                </div>
            </Row>
            <Row>
                <div className="hero-text" >
                    <p>{accomidation.description}</p>
                </div>
            </Row>
            <Row className="listing" >
                <Col>
                    {
                    accomidation.accomodations.map((room, index) => (
                        <BasicTile room={room} index={index+1} reveresed={false} />
                    ))
            }
                </Col>
            </Row>
            
            
            
        </Container>
        
    )
}
export default Accomidation;