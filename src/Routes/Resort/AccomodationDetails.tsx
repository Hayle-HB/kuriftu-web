import { Container, Row, Col } from "react-bootstrap";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import Carousel from "../../UI/Carousel";
import { ACCOMODATIONDETAIL } from "../../MockData/accomdations";
import BasicTile from "../../UI/Card/BasicTiles/BasicTile";
import ListHero from "../../UI/Hero/ListHero";
import FeaturedTile from "../../UI/Card/BasicTiles/FeaturedTile";


const AccomodationDetails: React.FC = () => {
    const { slug, id } = useParams<{ slug: string; id: string }>();

    const detailAccommodation =
        slug && id && ACCOMODATIONDETAIL[slug]
        ? ACCOMODATIONDETAIL[slug][parseInt(id, 10)]
        : null;

    if (!detailAccommodation) {
        return <div>Resort not found</div>;
    }

    console.log(detailAccommodation);
    let accomidationItem = {
        title:detailAccommodation.title,
        description:detailAccommodation.booking?.description,
        headerText: "",
        image: detailAccommodation.booking?.images[0],
    }

    return (
        <Container className="accomidation-page" fluid>
            <Row className="resorts-subpage-hero">
                <Carousel classNames="hero-carousel" slides={detailAccommodation.carouselImages} />
            </Row>
            <FeaturedTile
                item={accomidationItem}
                hasLinks={true}
                linkText="BOOK NOW"
                linkURL={`/${slug}/rooms`}
                reveresed={false}
                index={0}
             />
            <ListHero classNames="" list={detailAccommodation.amenities} title="Ameneties" />
            {
                detailAccommodation.otherAccomodation.length > 0 &&
                <>
                <Row className="listing" >
                    <h1 style={{textAlign: 'center'}}>Other Accommodations</h1>
                </Row>
                <Row>
                    {
                        detailAccommodation.otherAccomodation.map((item, index) => (
                            <Col sm={12} md={3}><BasicTile item={item} index={item.id} reveresed={index % 2 === 0 ? true: false} hasLinks={true} linkText="Learn More and Book" linkURL={`/resorts/${slug}/acc/${item.id}`} square={true}/> </Col>
                        ))
                    }
                </Row>
                    
                        
               
                </>
            }
            
            
            
            
        </Container>
        
    )
}
export default AccomodationDetails;