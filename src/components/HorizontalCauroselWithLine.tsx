import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonCoverCard from "./CoverCommonCard";

type Item = {
  title: string;
  image: string;
  description: string;
};

interface HorizontalCarouselWithLineProps {
  items: Item[];
}

const HorizontalCarouselWithLine: React.FC<HorizontalCarouselWithLineProps> = ({
  items,
}) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div style={{ padding: "10px", position: "relative" }} className="carousel-container">
      <Slider {...settings} className="custom-slider">
        {items.map((item, index) => (
          <div key={index} className="carousel-item"> {/* Added class for spacing */}
            <CommonCoverCard
              image={item.image}
              description={item.description}
              title={item.title}
              linkHref=""
              linkText=""
              subTitle=""
              descriptionClass="two-line-text"
            />
          </div>
        ))}
      </Slider>
      {/* Custom navigation line */}
      {items.length > 0 && (
        <div
          className="horizontal-line"
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "40%",
            right: "40%",
            height: "2px",
            backgroundColor: "#e0e0e0", // Base line color
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: `${(activeIndex / items.length) * 100}%`, // Calculate active segment position
              width: `${100 / items.length}%`, // Width of active segment
              height: "2px",
              backgroundColor: "#000", // Active segment color
              transition: "left 0.3s ease",
            }}
          />
        </div>
      )}
      {/* Responsive styles */}
      <style>
        {`
          .custom-slider .carousel-item {
            padding: 0 15px; /* Added margin between cards */
          }
          .custom-slider .slick-list {
            margin: 0 -15px; /* Adjust overall spacing */
          }
          @media (max-width: 1024px) {
            .horizontal-line {
              left: 30%;
              right: 30%;
            }
          }
          @media (max-width: 768px) {
            .horizontal-line {
              left: 20%;
              right: 20%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HorizontalCarouselWithLine;
