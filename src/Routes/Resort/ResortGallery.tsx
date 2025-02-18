import { Container, Row, Col } from "react-bootstrap";
import {useParams} from "react-router-dom";
import Carousel from "../../UI/Carousel";
//import { WELLNESS } from "../../MockData/wellness";
import { Gallery } from "../../MockData/gallery";
import GridGallery from "../../UI/Gallery/GridGallery";

const ResortGallery: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();


    if (!slug) {
        return <div>Resort not found</div>;
    }
    const gallery = Gallery[slug];

    return (
        <Container className="resort-gallery-wrapper" fluid>
            
            <Row className="resort-gallery">
                <GridGallery images={gallery} columns={3}/>
            </Row>
            
        </Container>
        
    )
}
export default ResortGallery;