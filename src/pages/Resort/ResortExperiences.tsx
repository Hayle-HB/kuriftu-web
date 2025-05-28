import { useParams } from "react-router";
import CarouselWithButtons from "../../components/CarouselWithButtons";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import { EXPERIENCE } from "../../MockData/experiences";
import { Col, Container, Row } from "react-bootstrap";
import HorizontalCardCarousel from "../../components/HorizontalCardCarousel";
import CommonCoverCard from "../../components/CoverCommonCard";

const ResortExperiences = () => {
  const { slug } = useParams<{ slug: string }>();
  const experience = slug && EXPERIENCE[slug];
  if (!experience) {
    return <div>Resort not found</div>;
  }
  return (
    <div className="resort-experiences-page px-0 py-0">
      {/* Hero Title & Carousel */}
      <section
        className="resort-exp-hero-section py-5"
        style={{ background: "#f7f5f1" }}
      >
        <h2
          className="accomdation-detail-title text-center pt-3 title-txt mb-4"
          style={{
            fontFamily: "Neue Helvetica Medium",
            fontSize: "2.5rem",
            letterSpacing: "0.02em",
          }}
        >
          {experience.title}
        </h2>
        <div
          className="resort-exp-carousel-wrapper mx-auto"
          style={{ maxWidth: 1200 }}
        >
          <CarouselWithButtons
            items={experience.carouselImages}
            subTitle={experience.description}
          />
        </div>
      </section>

      {/* Two Column Experience Sections */}
      <section
        className="resort-exp-twocol-section py-5"
        style={{ background: "#fff" }}
      >
        <Container>
          {experience.experiences.map((item, index) => (
            <div className="my-5 py-4" key={index}>
              <TwoColumnLayout
                index={index}
                description={item.description}
                image={item.image}
                title={item.title}
                isEnquiryForm={false}
                link={""}
                linkText={"Explore"}
              />
            </div>
          ))}
        </Container>
      </section>

      {/* Experiences Grid Section */}
      <section
        className="resort-exp-grid-section py-5"
        style={{ background: "#f7f5f1" }}
      >
        <Container>
          <Row className="g-4 px-2 py-3">
            {experience.items.map((item, index) => (
              <Col key={index} xs={12} sm={12} md={4}>
                <CommonCoverCard
                  description={item.description}
                  subTitle={""}
                  image={item.image}
                  title={item.title}
                  linkHref=""
                  linkText=""
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Experience Section */}
      {slug !== "entoto" && (
        <section
          className="resort-exp-featured-section py-5"
          style={{ background: "#fff" }}
        >
          <Container fluid>
            <Row className="justify-content-center">
              <h3
                className="text-center title-txt mb-4"
                style={{
                  padding: "40px 0px 0px 0px ",
                  fontFamily: "Neue Helvetica Medium",
                  fontSize: "2rem",
                  letterSpacing: "0.01em",
                }}
              >
                Featured Experience
              </h3>
              <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto" }}>
                <HorizontalCardCarousel items={experience.featured} />
              </div>
            </Row>
          </Container>
        </section>
      )}
    </div>
  );
};

export default ResortExperiences;
