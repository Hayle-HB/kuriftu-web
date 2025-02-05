import { useParams } from "react-router";
import CarouselWithButtons from "../../components/CarouselWithButtons";
import { ADVENTURE } from "../../MockData/adventure";
import HorizontalMiddleActiveCarousel from "../../components/HorizontalMiddleActiveCarousel";

const ResortAdventure = () => {
  const { slug } = useParams<{ slug: string }>();
  const adventure = slug && ADVENTURE[slug];
  if (!adventure) {
    return <div>Resort not found</div>;
  }
  return (
    <div className="px-3 py-4">
      <h4 className="text-center advanture-headers pt-1 title-txt"
        style={{fontFamily:'Neue Helvetica Medium'}}

      >{adventure.title}</h4>
      <div>
        <CarouselWithButtons
          items={adventure.carouselImages}
          subTitle={adventure.description}
        />
      </div>
      {/* <p className="px-5 exp-description" style={{fontFamily:'Neue Helvetica thin'}}>{adventure.description}</p> */}
      <HorizontalMiddleActiveCarousel 
      descriptionClassName="advanture-description-font"
      items={adventure.adventures} />
    </div>
  );
};

export default ResortAdventure;
