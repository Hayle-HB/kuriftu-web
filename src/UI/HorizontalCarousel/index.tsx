import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HorizontalCarouselProps {
  items: string[];
}

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({ items }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
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

  return (
    <div style={{ padding: "5px" }} className="mb-4 mt-4 horizontal-carousel">
      <Slider dotsClass="slick-dots slick-dots-customize mt-4"  {...settings}>
        {items.map((image: any, index) => (
          <div className="p-3 mt-4 mb-4" key={index}>
            <img
              src={image}
              alt={`image${index}`}
              style={{
                width: "100%",
                height: index % 2 === 0 ? "300px" : "300px", // Smaller height for even indices
                objectFit: "cover",
                transition: "all 0.3s ease",
                display: "block",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalCarousel;
