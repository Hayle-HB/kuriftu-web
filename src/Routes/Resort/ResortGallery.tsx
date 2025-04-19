import { Container, Row, Col } from "react-bootstrap";
import {useParams} from "react-router-dom";
import Carousel from "../../UI/Carousel";
//import { WELLNESS } from "../../MockData/wellness";
import { Gallery } from "../../MockData/gallery";
import GridGallery from "../../UI/Gallery/GridGallery";
import { ReactEventHandler, useState } from "react";

const ResortGallery: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [isGridState, setIsGridState] =  useState(true);

    if (!slug) {
        return <div>Resort not found</div>;
    }
    const gallery = Gallery[slug];
    

    return (
        <Container className="resort-gallery-wrapper" fluid>
            <Row>
                <div className="hero-text" >
                    <h1 
                        style={{
                            textAlign: 'center',
                            fontSize: "1.75rem"
                        }}
                    >Explore {slug.charAt(0).toUpperCase() + slug.slice(1)}</h1>
                </div>
            </Row>
            <Row className="resort-gallery-control" >
                <Col>
                    <button className={`${isGridState ? 'selected': ''}`} onClick={()=> setIsGridState(true)}>
                        <p><i className="bi bi-columns-gap"></i>{' '}Grid</p>
                    </button>
                    <button className={`${isGridState ? '': 'selected'}`} onClick={()=> setIsGridState(false)}>
                        <p><i className="bi bi-square"></i>{' '}Single</p>
                    </button>
                </Col>
            </Row>

            {
                isGridState ? (
                    <Row className="resort-gallery">
                        <GridGallery images={gallery} columns={3}/>
                    </Row>
                ): (
                    <Row className="resort-gallery-slider">
                        <Carousel classNames="hero-carousel" slides={gallery} />
                    </Row>
                )
            }
            
        </Container>
        
    )
}
export default ResortGallery;