import { useParams } from "react-router";
import CarouselWithButtons from "../../components/CarouselWithButtons";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import { Col, Row } from "react-bootstrap";
import CommonCoverCard from "../../components/CoverCommonCard";
import CoverHorizontalCard from "../../components/CoverHorizontailCard";
import { EVENTS } from "../../MockData/events";

const ResortEvents = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = slug && EVENTS[slug];
  if (!event) {
    return <div>Resort not found</div>;
  }
  return (
    <div className="px-3 py-4">
      <h4 className="text-center accomdation-detail-title mt-3 title-txt"
      style={{fontFamily:'Neue Helvetica Medium'}}
      >{event.title}</h4>
      <div>
        <CarouselWithButtons
          items={event.carouselImages}
          subTitle={event.description}
        />
      </div>
      {/* <p className="p-3 exp-description" style={{fontFamily:'Neue Helvetica thin'}}>{event.description}</p> */}
      {event.events.map((item, index) => (
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
      {event.venus.length > 0 && (
        <Row className="g-4">
          <h4  className="text-center accomdation-detail-title mt-3 title-txt"
           style={{fontFamily:'Neue Helvetica Medium',padding:'15px 0px'}} >Venus</h4>
          {event.venus.map((item, index) => (
            <Col key={index}  md={4} className="d-flex">
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

      {event.personalizations.length > 0 && (
        <Row className="g-4">
          <h4 className="text-center accomdation-detail-title mt-3 title-txt"
           style={{fontFamily:'Neue Helvetica Medium',padding:'15px 0px'}}>Personalization</h4>

          {event.personalizations.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="d-flex">
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
      )}
    </div>
  );
};

export default ResortEvents;
