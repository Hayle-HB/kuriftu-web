import { useParams } from "react-router";
import { ACCOMODATIONS } from "../../../MockData/accomdations";
import CommonCoverCard from "../../../components/CoverCommonCard";
import { Col, Container, Row } from "react-bootstrap";

const ResortAccomodation = () => {
  const { slug } = useParams<{ slug: string }>();
  const accomodation = slug && ACCOMODATIONS[slug];
  
  if (!accomodation) {
    return <div>Accomodation not found</div>;
  }

  return (
    <div className="px-3 py-4">
     
      <Container>
      <div className="resort-accomodation px-3 py-5">
        <h3 className="title-txt" style={{fontFamily:'Neue Helvetica Medium',}}>{accomodation.title}</h3>
        <p  style={{fontFamily:'Neue Helvetica thin', fontSize:'18px',lineHeight:'27px', fontWeight:'400',color:'#000', fontStyle:'normal'}}>{accomodation.description}</p>
      </div>
      </Container>
      <Container fluid >
        {slug=='entoto'? (
           <Row className="g-5">
           {accomodation.accomodations &&
             accomodation.accomodations.map((item, index) => (
               <Col key={index} xs={12} sm={6} md={6} className="d-flex">
                 <div className="d-flex flex-column h-100">
                   <CommonCoverCard
                     title={item.title}
                     description={item.description}
                     subTitle={"Experience"}
                     linkText={"Explore"}
                     linkHref={`/resorts/${slug}/acc/${item.accomdationId}`}
                     image={item.image}
                   />
                 </div>
               </Col>
             ))}
         </Row>
        ):(
          <Row className="g-5">
          {accomodation.accomodations &&
            accomodation.accomodations.map((item, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="d-flex">
                <div className="d-flex flex-column h-100">
                  <CommonCoverCard
                    title={item.title}
                    description={item.description}
                    subTitle={"Experience"}
                    linkText={"Explore"}
                    linkHref={`/resorts/${slug}/acc/${item.accomdationId}`}
                    image={item.image}
                  />
                </div>
              </Col>
            ))}
        </Row>
        )}
     
      </Container>

        
    </div>
  );
};

export default ResortAccomodation;
