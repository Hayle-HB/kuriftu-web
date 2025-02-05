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
    <div className="px-3 py-4">
      <h4 className=" accomdation-detail-title text-center pt-3 title-txt"
      style={{fontFamily:'Neue Helvetica Medium'}}
      >
        {experience.title}
      </h4>
      <div>
        <CarouselWithButtons
          items={experience.carouselImages}
          subTitle={experience.description}
        />
      </div>
      {/* <p className=" exp-description" style={{fontFamily:'Neue Helvetica thin'}}>
        {experience.description}
      </p> */}
      {experience.experiences.map((item, index) => (
        <div className=" my-5 py-5">
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
      <Row className="g-4 px-3 py-5">
        {experience.items.map((item, index) => (
          <Col key={index} xs={12} sm={12} md={4} >
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

      {slug !== "entoto" && (
        <Container fluid >
          <Row className="">
          <h5 className="text-center title-txt" style={{padding:'40px 0px ', fontFamily:'Neue Helvetica Medium'}}>Featured Experience</h5>
          <HorizontalCardCarousel items={experience.featured} />
          </Row>
        </Container >
      )}
    </div>
  );
};

export default ResortExperiences;
