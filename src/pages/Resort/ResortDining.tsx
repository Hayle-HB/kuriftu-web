import { useParams } from "react-router";
import { DINING } from "../../MockData/dining";
import CarouselWithButtons from "../../components/CarouselWithButtons";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import { Col, Row } from "react-bootstrap";
import CommonCoverCard from "../../components/CoverCommonCard";

const ResortDining = () => {
  const { slug } = useParams<{ slug: string }>();
  const dining = slug && DINING[slug];
  if (!dining) {
    return <div>Resort not found</div>;
  }
  return (
    <div className="px-3 py-4">
      <h4 className="text-center accomdation-detail-title pt-3 title-txt"
      style={{fontFamily:'Neue Helvetica Medium'}}
      >{dining.title}</h4>
      <div>
        <CarouselWithButtons
          items={dining.carouselImages}
          subTitle={dining.description}
        />
      </div>
      {/* <p className="p-3 exp-description" style={{fontFamily:'Neue Helvetica Medium'}}>{dining.description}</p> */}
      {dining.diningOptions.map((item, index) => (
         <div className="my-5 py-5">
        <TwoColumnLayout
          index={index}
          description={item.description}
          image={item.image}
          title={item.title}
          isEnquiryForm={false}
          link={item.menuLink}
          linkText={"View Menu"}
        />
        </div>
      ))}
      {dining.diningExperiences.length > 0 && slug !=="entoto" && (
        <div>
           <h4 className="text-center  accomdation-detail-title pt-5 pb-4 title-txt"
      style={{fontFamily:'Neue Helvetica Medium'}}
      >Dining Experience</h4>
          <div>
            <Row className="g-4">
              {dining.diningExperiences.map((item, index) => (
                <Col key={index} xs={12} sm={6} md={4} className="d-flex">
                  <div className="d-flex flex-column h-100">
                    <CommonCoverCard
                      title={item.title}
                      description={item.description}
                      subTitle={""}
                      linkText={""}
                      linkHref={``}
                      image={item.image}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResortDining;
