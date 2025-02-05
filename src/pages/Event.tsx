import { Col, Container, Row } from "react-bootstrap";
import CarouselWithButtons from "../components/CarouselWithButtons";
import CommonCoverCard from "../components/CoverCommonCard";
import Header from "../components/Header/Header";
import { eventPageData } from "../MockData/eventPageData";

const Event = () => {
  return (
    <Container fluid  >
      <div>
      <Header />
      </div>
     
      <h4 className="text-center   title-txt" style={{paddingTop:'80px', fontFamily:'Neue Helvetica Medium', paddingLeft:'15px'}} >
        {eventPageData.title}
      </h4>
      {/* <div>
        <CarouselWithButtons
          items={eventPageData.carouselImages}
          subTitle={eventPageData.subtitle}
         />
      </div> */}
       <div className="text-center my-4">
        <img
        className="event-img-sm"
          src={eventPageData.image} // Replace this with your actual image URL
          alt="Event Banner"
          style={{
            width: "100%",
            // maxWidth: "1200px",
            height: "85vh",
            borderRadius: "8px",
          }}
        />
        {/* Optional subtitle */}
        <p style={{fontFamily:'Neue Helvetica thin',color:'#525252', fontSize:'0.6rem',textTransform:'uppercase', fontWeight:'400',letterSpacing:'o.2rem', textAlign:'left', marginTop:'8px'}}>{eventPageData.subtitle}</p>
      </div>
      <Row className="g-4 px-3 py-4 event-sm-contant" >
        {eventPageData.events.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="d-flex event-sm-col" style={{marginBottom:'2rem', marginTop:'4rem'}}>
            <div className="d-flex flex-column px-3  h-100">
              <CommonCoverCard
                title={item.title}
                description={item.description}
                subTitle=""
                linkText={item.linkText}
                linkHref={item.link}
                image={item.image}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};


export default Event;
