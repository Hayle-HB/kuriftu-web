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

    return (
        <Container className="accomidation-page" fluid>
            <Row>
                <div className="hero-text" >
                    <h1 
                        style={{
                            textAlign: 'center',
                            fontSize: "1.75rem"
                        }}
                    >{dining.title}</h1>
                </div>
            </Row>
            <Row className="resorts-subpage-hero">
                <Carousel classNames="hero-carousel" slides={dining.carouselImages} />
            </Row>
            {
                dining.detailDescription && (
                    <Row>
                        <TextHero classNames=""  text={dining.detailDescription} />
                    </Row>
                )
            }
            <Row>
                <Col>
                    <h1 className="text-center pt-5 fs-1">Dining Options</h1>
                </Col>
            </Row>
            <Row className="listing gx-2" >
                    {
                    dining.diningOptions.map((item, index) => (
                        <Col md={6} sm={12} key={index} >
                            <BasicTile
                                item={item}
                                index={index+1}
                                reveresed={false}
                                hasLinks={item.menuLink === "" ? false: true}
                                linkText="Explore Menu"
                                linkURL={item.menuLink}
                                square={true} 
                                linkExternal={true}
                            />
                        </Col>
                    ))
            }
                
            </Row>
            
        </Container>
        
    )
}
export default Dinnign;