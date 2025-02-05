import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Gallery } from "../../MockData/gallery";

const ResortGallery = () => {
  const { slug } = useParams<{ slug: string }>();
  const galleryItems = slug && Gallery[slug];
  if (!galleryItems) {
    return <div>Resort not found</div>;
  }

  return (
    <Container fluid>
      <Row className="g-4 px-4 py-5">
        {galleryItems.map((item, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="d-flex">
            <div className="w-100 h-100">
              <img
                src={item}
                alt="Animals"
                className="img-fluid h-100 w-100"
                style={{ objectFit: "cover", borderRadius: "20px" }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResortGallery;
