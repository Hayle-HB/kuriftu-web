import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Carousel from "../../UI/Carousel";
import { EXPERIENCE } from "../../MockData/experiences";
import TextHero from "../../UI/Hero/TextHero";
import "./Experiences.css";
const Experiences: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) {
    return <div>Resort not found</div>;
  }
  const experiences = EXPERIENCE[slug];
  if (!experiences) {
    return <div>Experiences not found</div>;
  }

  // Remove duplicate: skip first item if it matches the main description
  const filteredItems = experiences.items.filter(
    (item, idx) =>
      idx !== 0 ||
      (item.title.trim() !== experiences.title.trim() &&
        item.description.trim() !== experiences.description.trim())
  );

  return (
    <div className="resort-experiences-page px-0 py-0">
      {/* Hero Title & Carousel */}
      <section className="resort-exp-hero-section py-5">
        <h2
          className="accomdation-detail-title text-center pt-3 title-txt mb-4"
          style={{
            fontFamily: "Neue Helvetica Medium",
            fontSize: "2.5rem",
            letterSpacing: "0.02em",
          }}
        >
          {experiences.title}
        </h2>
        <div
          className="resort-exp-carousel-wrapper mx-auto"
          style={{ maxWidth: 1200 }}
        >
          <Carousel
            classNames="hero-carousel"
            slides={experiences.carouselImages}
          />
        </div>
        <div className="mt-4">
          <TextHero
            classNames="exp-description"
            text={experiences.description}
          />
        </div>
      </section>

      {/* Modern Gallery Grid for Experiences */}
      <section className="resort-exp-grid-section py-5">
        <Container>
          <Row className="g-4 px-2 py-3">
            {filteredItems.map((item, index) => (
              <Col key={index} xs={12} sm={6} lg={4}>
                <div
                  className="exp-gallery-card h-100 d-flex flex-column align-items-stretch shadow-sm rounded-4 bg-card-custom exp-card-hover"
                  style={{
                    minHeight: 420,
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                >
                  <div
                    className="exp-gallery-img w-100"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: 240,
                      borderTopLeftRadius: 18,
                      borderTopRightRadius: 18,
                    }}
                  ></div>
                  <div className="exp-gallery-text d-flex flex-column justify-content-start p-4 flex-grow-1">
                    <h3
                      className="mb-2"
                      style={{
                        fontWeight: 600,
                        fontSize: "1.35rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "1.08rem",
                        color: "#444",
                        marginBottom: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default Experiences;
