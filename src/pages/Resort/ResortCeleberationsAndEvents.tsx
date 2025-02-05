import { useParams } from "react-router";
import { CELEBRATIONSANDEVENTS } from "../../MockData/celebrationsAndEvent";
import CarouselWithButtons from "../../components/CarouselWithButtons";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import { Col, Row } from "react-bootstrap";
import CommonCoverCard from "../../components/CoverCommonCard";
import CoverHorizontalCard from "../../components/CoverHorizontailCard";

const ResortCeleberationsAndEvents = () => {
  const { slug } = useParams<{ slug: string }>();
  const celebrationAndEvent = slug && CELEBRATIONSANDEVENTS[slug];
  if (!celebrationAndEvent) {
    return <div>Resort not found</div>;
  }
  return (
    <div className="px-3 py-4">
      <h4 className="text-center accomdation-detail-title pt-3 title-txt"
            style={{fontFamily:'Neue Helvetica Medium'}}>
        {celebrationAndEvent.title}
      </h4>
      <div>
        <CarouselWithButtons
          items={celebrationAndEvent.carouselImages}
          subTitle={celebrationAndEvent.description}
        />
      </div>
      {/* <p className="p-3 exp-description" style={{fontFamily:'Neue Helvetica thin'}}>
        {celebrationAndEvent.description}
      </p> */}
      {celebrationAndEvent.celebrations.map((item, index) => (
        <div className="my-5 py-5">
        <TwoColumnLayout
          index={index}
          description={item.description}
          image={item.image}
          title={item.title}
          isEnquiryForm={item.isEnquiryForm}
          link={item.link}
          linkText={item.linkText}
        />
        </div>
      ))}
      {celebrationAndEvent.venus.length > 0 && (
        <Row className="g-4.8">
          <h4  className="text-center accomdation-detail-title mt-3 title-txt"
           style={{fontFamily:'Neue Helvetica Medium',padding:'15px 0px'}} >Venus</h4>
          {celebrationAndEvent.venus.map((item, index) => (
            <Col key={index} md={4} className="d-flex">
              <div className="d-flex flex-column h-100">
                <CoverHorizontalCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  descriptionClass="advanture-description-font"
                />
              </div>
            </Col>
          ))}
        </Row>
      )}

      <Row className="g-4.8">
      <h4 className="text-center accomdation-detail-title mt-3 title-txt"
           style={{fontFamily:'Neue Helvetica Medium',padding:'15px 0px'}}>Personalization</h4>

        {celebrationAndEvent.personalizations.length > 0 &&
          celebrationAndEvent.personalizations.map((item, index) => (
            <Col key={index}  md={4} className="d-flex">
              <div className="d-flex flex-column h-100">
                <CommonCoverCard
                  title={item.title}
                  description={item.description}
                  subTitle=""
                  linkText=""
                  linkHref=""
                  image={item.image}
                />
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ResortCeleberationsAndEvents;
