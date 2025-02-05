import { useParams } from "react-router";
import { ACCOMODATIONDETAIL } from "../../../MockData/accomdations";
import CarouselWithButtons from "../../../components/CarouselWithButtons";
import Listing from "../../../components/Listing";
import { Col, Container, Row } from "react-bootstrap";
import CommonCoverCard from "../../../components/CoverCommonCard";
import { Link } from "react-router-dom";

const ResortAccomodationDetail = () => {
  const { slug, id } = useParams<{ slug: string; id: string }>();

  const detailAccommodation =
    slug && id && ACCOMODATIONDETAIL[slug]
      ? ACCOMODATIONDETAIL[slug][parseInt(id, 10)]
      : null;

  if (!detailAccommodation) {
    return <div>Resort not found</div>;
  }
  return (
    <div className="px-3 py-4 m-2 title-txt">
      <h4 className="title-txt" style={{fontFamily:'Neue Helvetica Medium',}}>{detailAccommodation.title}</h4>
      <div>
        <CarouselWithButtons
          items={detailAccommodation.carouselImages}
          subTitle={detailAccommodation.title}
        />
      </div>

      {detailAccommodation.booking && (
        <Row className="g-4  mt-5 mb-5">
          {/* Images */}
          {detailAccommodation.booking.images.map((image, index) => (
            <Col
              xs={6}
              sm={6}
              md={4}
              key={index}
              className="d-flex justify-content-center"
            >
              <img
                src={image}
                alt={`Booking  ${index + 1}`}
                style={{ maxWidth: "100%", borderRadius: "8px" }}
              />
            </Col>
          ))}
          <Col
            xs={12}
            sm={12}
            md={4}
            className="d-flex flex-column justify-content-between"
          >
            <div style={{ flexGrow: 1 }}>
              <p className="accomdation-detail-text description-txt" style={{ padding: "15px", textAlign: "left",fontFamily:'Neue Helvetica thin' }}>
                {detailAccommodation.booking.description}
              </p>
            </div>
            <div className="mt-auto text-start book-now-btn">
              <Link
                style={{ color: "gray",fontFamily:'Neue Helvetica thin', }}
                to={`/${slug}/rooms`}
                className="btn btn-link book-now-link"
              >
                Book Now
              </Link>
            </div>
          </Col>
        </Row>
      )}
      <div>
        <h4 className="title-txt pt-5 pb-4" style={{fontFamily:'Neue Helvetica Medium',}}>Ameneties</h4>
        <Listing items={detailAccommodation.amenities} size={4} />
      </div>
      <div className="bg-white py-5 mt-5 mb-5">
        <h4 className="title-txt" style={{fontFamily:'Neue Helvetica Medium',}}>Other Accomodations</h4>
        <Container fluid className="py-5">
          <Row className="g-5">
            {detailAccommodation.otherAccomodation.map((item, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="d-flex">
                <div className="d-flex flex-column h-100">
                  <Link
                  
                    to={`/resorts/${slug}/acc/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CommonCoverCard
                      title={item.title}
                      description={item.description}
                      subTitle={""}
                      linkText={""}
                      linkHref={``}
                      image={item.image}
                    />
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ResortAccomodationDetail;
