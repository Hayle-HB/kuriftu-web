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
      
    </div>
  );
};

export default ResortDining;
