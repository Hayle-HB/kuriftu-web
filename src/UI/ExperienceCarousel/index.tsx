import React, { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import { experienceCarousel } from "../../Data/horizontalCarousel";

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

interface CarouselWithButtonsProps {
  items: string[];
  subTitle: string;
}

const CarouselWithButtons: React.FC<CarouselWithButtonsProps> = ({
  items,
  subTitle,
}) => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div style={{ padding: "20px" }}>
      <Slider
        ref={sliderRef}
        {...settings}
        afterChange={(index) => setCurrentSlide(index + 1)}
      >
        {items.map((image, index) => (
          <div key={index}>
            <img
              style={{
                width: "100%",
                height: "80vh",
                objectFit: "cover",
              }}
              src={image}
              alt={"image " + index}
            />
          </div>
        ))}
      </Slider>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{subTitle}</p>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span style={{ marginRight: "100px", marginTop: "-10px" }}>
            {currentSlide}/{items.length}
          </span>
          <div>
            <button
              onClick={previous}
              disabled={currentSlide === 1}
              style={{
                pointerEvents: "all",
                border: "none",
                background: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#333",
                marginLeft: "10px",
              }}
            >
              &#8249;
            </button>
            <button
              onClick={next}
              disabled={currentSlide === experienceCarousel.length}
              style={{
                pointerEvents: "all",
                border: "none",
                background: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#333",
                marginRight: "10px",
              }}
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselWithButtons;
