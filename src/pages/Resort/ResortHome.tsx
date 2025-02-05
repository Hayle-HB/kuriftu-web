import { useParams } from "react-router";
import { RESORTDETAILS } from "../../MockData/resortsDetails";
import HorizontalCarousel from "../../UI/HorizontalCarousel";
import { Gallery } from "../../MockData/gallery";
import CommonCard from "../../components/CommonCard";
import { ACCOMODATIONS } from "../../MockData/accomdations";
import { ITEMS } from "../../MockData/items";
import { EXPERIENCE } from "../../MockData/experiences";
import { WELLNESS } from "../../MockData/wellness";
import { EVENTS } from "../../MockData/events";
import { GIFTVOUCHER } from "../../MockData/giftVoucher";
import CommonCoverCard from "../../components/CoverCommonCard";
import { Col, Container, Row } from "react-bootstrap";
import { CELEBRATIONSANDEVENTS } from "../../MockData/celebrationsAndEvent";
import { africanVillageAccomdations } from "../../MockData/africanVillageAccomodation";
import { waterParkHomeData } from "../../MockData/waterParkHomeData";
import { bostonHomeData } from "../../MockData/bostonHomeData";
import Listing from "../../components/Listing";
import HorizontalCarouselWithLine from "../../components/HorizontalCauroselWithLine";
// import ResortMap from "../../components/ResortMap";

const ResortHome = () => {
  const { slug } = useParams<{ slug: string }>();
  const resort = slug && RESORTDETAILS[slug];
  const resortItems = slug && ITEMS[slug];

  const galleryImages =
    slug &&
    resortItems &&
    resortItems.some((item) => item.link === "gallery") &&
    Gallery[slug];
  const accomdation =
    slug &&
    resortItems &&
    resortItems.some((item) => item.link === "acc") &&
    ACCOMODATIONS[slug]?.accomodations[0];
  const adventure =
    slug &&
    resortItems &&
    resortItems.some((item) => item.link === "adv") &&
    ACCOMODATIONS[slug]?.accomodations[0];

  const experience =
    slug &&
    resortItems &&
    resortItems.some((item) => item.link === "exp") &&
    EXPERIENCE[slug]?.experiences[0];

  const wellness =
    slug &&
    resortItems &&
    resortItems.some((item) => item.link === "well") &&
    WELLNESS[slug]?.wellness[0];

  const event =
    slug &&
    resortItems &&
    resortItems.some((item) => item.link === "event") &&
    EVENTS[slug]?.events[0];

  const gift =
    slug &&
    resortItems &&
    resortItems.some((item) => item.link === "well") &&
    GIFTVOUCHER[slug];

  const celebrationAndEvent =
    slug &&
    resortItems &&
    resortItems.some((item) => item.link === "corp") &&
    CELEBRATIONSANDEVENTS[slug]?.celebrations[0];

  const villageAccomodation =
    slug && slug === "africanVillage" && africanVillageAccomdations;

  const waterPark = slug && slug === "waterpark" && waterParkHomeData;
  const boston = slug && slug === "boston" && bostonHomeData;

  if (boston) {
    return (
      <div>
         <div className="video-container">
          <iframe 
            width="100%"
            src={boston.cover_video} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture; loop"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        
          <div className="px-3 pb-4">
          <CommonCard
            description={boston.description}
            subTitle={boston.region}
            title={boston.name} />

          <div className="resort-cover-image">
              <img
                src={boston.cover_image}
                alt={boston.name}
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                }}
                />
          </div>

          <Container>
          <div className="py-5 px-3 my-4 text-center">
            <h2 className="my-3 title-txt" style={{fontFamily:'Neue Helvetica Medium'}}>{boston.art.title}</h2>
            <p className="mb-4 description-txt" style={{fontFamily:'Neue Helvetica thin', fontSize:'18px', lineHeight:'27px',fontWeight:'400',fontStyle:'normal', color:'#000'}}>{boston.art.description}</p>
          </div>
          </Container>


          <Container fluid>
          <Row className="g-5 px-3 py-5">
          {boston.items.map((item, index) => (
            <Col key={index} xs={12} sm={12}  md={6} lg={4} >
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

          <div className="px-3 py-5 mt-4">
            <h5 className="text-center welness-title " style={{fontFamily:'Neue Helvetica Medium', fontWeight:'600'}}>Our Facilities</h5>
            <Listing size={3} items={boston.facilities} />
          </div>

          <div className="px-3 py-5 mt-4">
          <HorizontalCarouselWithLine items={boston.experiences} />
          </div>
          </div>
      
      </div>
    );
  } else if (waterPark) {
    return (
      <div>
        {/* <div className="video-container">
          <iframe
            className="home-video"
            src={waterPark.cover_video}
            width="100%"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={waterPark.name}
            style={{height:'60rem'}}
          ></iframe>
        </div> */}
        <div className="video-container">
            <iframe
              src={waterPark.cover_video}
              width="100%"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={waterPark.name}
            ></iframe>
          </div>
        <div className="content-container">
          <Container fluid className="mt-5 mb-4">
            <Row className="g-5">
              {waterPark.cards.map((item) => (
                <Col xs={12} sm={6} md={4} className="d-flex mb-5">
                  <CommonCoverCard
                    title={item.title}
                    description={item.description}
                    subTitle={""}
                    linkText={""}
                    linkHref={``}
                    image={item.image}
                  />
                </Col>
              ))}
            </Row>
          </Container>
          <Container fluid className="mt-5 mb-4">
            <h3 className="text-center welness-title " style={{fontFamily:'Neue Helvetica Medium', fontWeight:'600'}}>{waterPark.experiences.title}</h3>
            
            <Row className="g-5">
              {waterPark.experiences.cards.map((item) => (
                <Col xs={12} sm={6} md={4} className="d-flex">
                  <CommonCoverCard
                    title={item.title}
                    description={item.description}
                    subTitle={""}
                    linkText={""}
                    linkHref={``}
                    image={item.image}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    );
  } else if (!resort) {
    return <div>Resort not found</div>;
  } else
    return (
      <>
        {resort.isIframe ? (
          <div>
            <div className="video-container">
              <iframe
                className="home-video"
                src={resort.cover_video}
                width="100%"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={resort.name}
              ></iframe>
            </div>
            <div className="content-container">
              <div className="px-3 py-4">
                <CommonCard
                  description={resort.description}
                  subTitle={resort.region}
                  title={resort.name}
                />

                {galleryImages && galleryImages?.length > 0 && (
                  <HorizontalCarousel items={galleryImages} />
                )}

                {/* cover image */}

                <div className="resort-home-accomodation">
                  <div className="resort-cover-image">
                    <img
                      src={resort.cover_image}
                      alt={resort.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  {accomdation && (
                    <CommonCard
                      title={accomdation.title}
                      description={accomdation.description}
                      subTitle={accomdation.subtitle}
                      linkText={"View All Accomomdations"}
                      linkHref={`/resorts/${slug}/acc`}
                    />
                  )}
                  {villageAccomodation && (
                    <CommonCard
                      title={villageAccomodation.title}
                      description={villageAccomodation.description}
                      subTitle={villageAccomodation.subtitle}
                      linkText={""}
                      linkHref={``}
                    />
                  )}
                </div>
                <Container fluid className="mt-5 mb-4">
                <Row className="g-5">
                  {villageAccomodation &&
                    villageAccomodation.accomodations.map((item) => (
                      <Col xs={12} sm={6} md={6} lg={4} className="d-flex">
                        <CommonCoverCard
                          title={item.title}
                          description={item.description}
                          subTitle={item.subtitle}
                          linkText={"Explore"}
                          linkHref={``}
                          image={item.image}
                        />
                      </Col>
                    ))}

                  {experience && (
                    <Col xs={12} sm={6} md={4} className="d-flex">
                      <div className="d-flex flex-column h-100">
                        <CommonCoverCard
                          title={experience.title}
                          description={experience.description}
                          subTitle={"Experience"}
                          linkText={"Explore"}
                          linkHref={`/resorts/${slug}/exp`}
                          image={experience.image}
                        />
                      </div>
                    </Col>
                  )}
                  {wellness && (
                    <Col xs={12} sm={6} md={4} cl assName="d-flex">
                      <div className="d-flex flex-column h-100">
                        <CommonCoverCard
                          title={wellness.title}
                          description={wellness.description}
                          subTitle={"Wellness"}
                          linkText={"Explore"}
                          linkHref={`/resorts/${slug}/acc`}
                          image={wellness.image}
                        />
                      </div>
                    </Col>
                  )}
                  {celebrationAndEvent && (
                    <Col xs={12} sm={6} md={4} className="d-flex">
                      <div className="d-flex flex-column h-100">
                        <CommonCoverCard
                          title={celebrationAndEvent.title}
                          description={celebrationAndEvent.description}
                          subTitle={"Corporate Experience"}
                          linkText={"Explore"}
                          linkHref={`/resorts/${slug}/corp`}
                          image={celebrationAndEvent.image}
                        />
                      </div>
                    </Col>
                  )}
                  {event && (
                    <Col xs={12} sm={6} md={4} className="d-flex">
                      <div className="d-flex flex-column h-100">
                        <CommonCoverCard
                          title={event.title}
                          description={event.description}
                          subTitle={"Celebration"}
                          linkText={"Explore"}
                          linkHref={`/resorts/${slug}/event`}
                          image={event.image}
                        />
                      </div>
                    </Col>
                  )}
                  {gift && (
                    <Col xs={12} sm={6} md={4} className="d-flex">
                      <div className="d-flex flex-column h-100">
                        <CommonCoverCard
                          title={gift.title}
                          description={gift.description}
                          subTitle={"Package Offers"}
                          linkText={"Explore"}
                          linkHref={`/resorts/${slug}/gift`}
                          image={
                            "https://kurifturesorts.com/_nuxt/img/slide6.a9663c6.webp"
                          }
                        />
                      </div>
                    </Col>
                  )}
                </Row>
                </Container>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div
              className="hero-video-container"
              style={{ position: "relative" }}
            >
                {/* <video
                  className="hero-video"
                  width="100%"
                  height="650"
                  src={resort.cover_video}
                  autoPlay
                  loop
                  controls
                  muted
                  playsInline
                  style={{ objectFit: "cover", width: "100%", height: "88vh" }}
                ></video> */}

              <video
                className="hero-video"
                width="100%"
                height="650"
                src={resort.cover_video}
                autoPlay
                loop
                controls
                muted
                playsInline
                style={{ objectFit: "cover", width: "100%", height: "88vh",   
                pointerEvents: "none", // Prevents user interaction
                }}
                onContextMenu={(e) => e.preventDefault()} 
              ></video>
            </div>
            <div className="px-3 py-2">
              <CommonCard
                description={resort.description}
                subTitle={resort.region}
                title={resort.name}
              />

              {galleryImages && galleryImages?.length > 0 && (
                <HorizontalCarousel items={galleryImages} />
              )}

              {/* cover image */}

              <div className="resort-home-accomodation">
                <div className="resort-cover-image ">
                  <img
                    src={resort.cover_image}
                    alt={resort.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                {accomdation && (
                  <div> 
                   <CommonCard
                    title={accomdation.title}
                    description={accomdation.description}
                    subTitle={accomdation.subtitle}
                    linkText={"View All Accomomdations"}
                    linkHref={`/resorts/${slug}/acc`}
                  />
                  </div>

                )}
                {villageAccomodation && (
                  <CommonCard
                    title={villageAccomodation.title}
                    description={villageAccomodation.description}
                    subTitle={villageAccomodation.subtitle}
                    linkText={""}
                    linkHref={``}
                  />
                )}
              </div>
              <Container fluid className="mt-5 mb-4">
                <Row className="g-5">
                  {villageAccomodation &&
                    villageAccomodation.accomodations.map((item) => (
                      <Col xs={12} sm={6} md={4} className="d-flex">
                        <CommonCoverCard
                          title={item.title}
                          description={item.description}
                          subTitle={item.subtitle}
                          linkText={"Explore"}
                          linkHref={``}
                          image={item.image}
                        />
                      </Col>
                    ))}

                  {experience && (
                    // <Col xs={12} sm={6} md={6} className="d-flex">
                    //   <div className="d-flex flex-column h-100">
                    //     <CommonCoverCard
                    //       title={experience.title}
                    //       description={experience.description}
                    //       subTitle={"Experience"}
                    //       linkText={"Explore"}
                    //       linkHref={`/resorts/${slug}/exp`}
                    //       image={experience.image}
                    //     />
                    //   </div>
                    // </Col>
                    ""
                  )}
                  {wellness && (
                    <Col xs={12} sm={6} md={4} className="d-flex">
                      <div className="d-flex flex-column h-100">
                        <CommonCoverCard
                          title={wellness.title}
                          description={wellness.description}
                          subTitle={"Wellness"}
                          linkText={"Explore"}
                          linkHref={`/resorts/${slug}/acc`}
                          image={wellness.image}
                        />
                      </div>
                    </Col>
                  )}
                  {celebrationAndEvent && (
                    <Col xs={12} sm={6} md={4} className="d-flex">
                      <div className="d-flex flex-column h-100">
                        <CommonCoverCard
                          title={celebrationAndEvent.title}
                          description={celebrationAndEvent.description}
                          subTitle={"Corporate Experience"}
                          linkText={"Explore"}
                          linkHref={`/resorts/${slug}/corp`}
                          image={celebrationAndEvent.image}
                        />
                      </div>
                    </Col>
                  )}
                  {event && (
                    <Col xs={12} sm={6} md={4} className="d-flex">
                      <div className="d-flex flex-column h-100">
                        <CommonCoverCard
                          title={event.title}
                          description={event.description}
                          subTitle={"Celebration"}
                          linkText={"Explore"}
                          linkHref={`/resorts/${slug}/event`}
                          image={event.image}
                        />
                      </div>
                    </Col>
                  )}
                  {/* {gift && (
                    <Col xs={12} sm={6} md={4} className="d-flex">
                      <div className="d-flex flex-column h-100">
                        <CommonCoverCard
                          title={gift.title}
                          description={gift.description}
                          subTitle={"Package Offers"}
                          linkText={"Explore"}
                          linkHref={`/resorts/${slug}/gift`}
                          image={
                            "https://kurifturesorts.com/_nuxt/img/slide6.a9663c6.webp"
                          }
                        />
                      </div>
                    </Col>
                  )} */}
                </Row>
              </Container>
            </div>
          </>
        )}
      </>
    );
};

export default ResortHome;
