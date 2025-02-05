import React, { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const handleAfterChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="my-2" style={{ padding: "10px" }}>
      <style>{`
        @keyframes snapIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .slide {
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .snap-in {
          animation: snapIn 0.5s ease-out;
        }
      `}</style>
      {items.length > 1 ? (
        <Slider
          ref={sliderRef}
          {...settings}
          afterChange={handleAfterChange}
        >
          {items.map((image, index) => (
            <div
              key={index}
              className={`slide ${
                currentSlide === index ? "snap-in" : ""
              }`}
            >
              <img
                className="carousel-fix-btns-image"
                style={{
                  width: "100%",
                  height: "75vh",
                  objectFit: "cover",
                }}
                src={image}
                alt={"image " + index}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div>
          <img
            style={{
              width: "100%",
              height: "80vh",
              objectFit: "cover",
            }}
            src={items[0]}
            alt={"image " + 1}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p className=" exp-description" style={{fontFamily:'Neue Helvetica thin'}}>{""}</p>

        <div style={{ display: "flex", alignItems: "center" }}>
          <p className="advanture-sub-headers description-txt">
            {currentSlide + 1}/{items.length}
          </p>
          {items.length > 1 && (
            <div className="sliderBtn">
              <button
                onClick={previous}
                disabled={currentSlide === 0}
                style={{
                  pointerEvents: "all",
                  border: "none",
                  background: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#333",
                }}
              >
                &#8249;
              </button>
              <button
                onClick={next}
                disabled={currentSlide === items.length - 1}
                style={{
                  pointerEvents: "all",
                  border: "none",
                  background: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#333",
                }}
              >
                &#8250;
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="exp-description" style={{fontFamily:'Neue Helvetica thin'}}>{subTitle}</p>

    </div>
  );
};

export default CarouselWithButtons;