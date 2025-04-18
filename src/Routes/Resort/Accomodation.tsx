import { Container, Row, Col } from "react-bootstrap";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import Carousel from "../../UI/Carousel";
import { ACCOMODATIONS } from "../../MockData/accomdations";
import BasicTile from "../../UI/Card/BasicTiles/BasicTile";
import ListHero from "../../UI/Hero/ListHero";


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
                <div className="hero-text" >
                    <h1 
                        style={{
                            textAlign: 'center',
                            marginTop: "4.6428571429rem",
                            marginBottom: "4.6428571429rem",
                            fontSize: "1.75rem"
                        }}
                    >{accomidation.title}</h1>
                    <p>{accomidation.description}</p>
                </div>
            </Row>
            <Row className="listing" >
                    {
                    accomidation.accomodations.map((room, index) => (
                        <Col md={6} className="mb-5"><BasicTile item={room} index={index+1} reveresed={false} hasLinks={true} linkText="Learn More and Book" linkURL={`${index+1}`} square={true} /></Col>
                    ))
            }
            </Row>
            
            {accomidation.includes && <ListHero classNames="" list={accomidation.includes} title="All stays include" column={3}/>}
            
            
        </Container>
        
    )
}
export default Accomidation;