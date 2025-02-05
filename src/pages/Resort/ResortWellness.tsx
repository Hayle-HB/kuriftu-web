import { Col, Container, Row } from "react-bootstrap";
import CarouselWithButtons from "../../components/CarouselWithButtons";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import { useParams } from "react-router";
import { WELLNESS } from "../../MockData/wellness";
import Listing from "../../components/Listing";

const ResortWellness = () => {
  const { slug } = useParams<{ slug: string }>();
  const wellness = slug && WELLNESS[slug];
  if (!wellness) {
    return <div>Resort not found</div>;
  }
  return (
    <div>
      <h4 className="accomdation-detail-title text-center py-3 title-txt"
      style={{fontFamily:'Neue Helvetica Medium'}}
      >
        {wellness.title}
      </h4>
      <div >
        <CarouselWithButtons
          items={wellness.carouselImages}
          subTitle={wellness.description}
        />
      </div>
      {/* <p className="p-3 exp-description" style={{fontFamily:'Neue Helvetica Medium'}}>
        {wellness.description}
      </p> */}
      {wellness.wellness.map((item, index) => (
        <div className="my-5 py-5">
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
      <Container>
        <Row>
          <Col sm={12} md={8}>
            {wellness.gallery.map((image, index) => {
              if (index === 0) {
                return (
                  <Row key={index}>
                    <Col xs={12}>
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        style={{ width: "100%", marginBottom: "20px",height:'31rem' }}
                      />
                    </Col>
                  </Row>
                );
              }
              return null; // We handle the rest outside the map
            })}

            <Row>
              {wellness.gallery.slice(1).map((image, index) => (
                <Col xs={6} key={index}>
                  <img
                    src={image}
                    alt={`Image ${index + 2}`}
                    style={{ width: "100%", marginBottom: "10px", height:'21rem' }}
                  />
                </Col>
              ))}
            </Row>
          </Col>

          <Col sm={12} md={4}>
            {wellness.items.map((item, index) => (
              <div key={index}>
                <h5 className="text-start welness-title " style={{fontFamily:'Neue Helvetica Medium', fontWeight:'600'}}>{item.title}</h5>
                <p className=" text-start welness-description" style={{fontFamily:'Neue Helvetica thin'}}>{item.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>

      <div className="my-5">
      <h5 className="text-center welness-title " style={{fontFamily:'Neue Helvetica Medium', fontWeight:'600'}}>Our facilities</h5>
        {/* <h4 className="title-txt"></h4> */}
        <Listing items={wellness.facilities} size={3} />
      </div>
    </div>
  );
};

export default ResortWellness;
