import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";

interface Item {
  title: string;
  description: string;
  image: string;
  subTitle: string;

}

interface HorizontalMiddleActiveCarouselProps {
  items: Item[];
  descriptionClassName?:string;

}

const HorizontalMiddleActiveCarousel: React.FC<
  HorizontalMiddleActiveCarouselProps
> = ({ 
  items,
  descriptionClassName=""


 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(3);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: visibleSlides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_: any, next: number) => setActiveIndex(next % items.length),
  };

  return (
    <div  className="horizental-carousl" style={{ padding: "20px",  }}>
      <Slider {...settings}>
        {items.map((item, index) => {
          let cardStyle: React.CSSProperties = {
            opacity: 0.5,
            transform: "scale(0.8)",
            transition: "all 0.5s ease",
          };

          const middleIndex = Math.floor(visibleSlides / 2);
          const relativeIndex =
            (index - activeIndex + items.length) % items.length;

          if (relativeIndex === middleIndex) {
            cardStyle = { opacity: 1, transform: "scale(1.2)" };
          } else if (
            relativeIndex === middleIndex - 1 ||
            relativeIndex === middleIndex + 1
          ) {
            cardStyle = { opacity: 0.7, transform: "scale(0.9)" };
          }

          return (
            <div className="my-4" style={{ padding: "10px" }} key={index}>
              <Card style={{ ...cardStyle, border: "none", width: "100%" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />
                <Card.Body>
                  <Card.Subtitle className="text-center advanture-subtitle" style={{fontFamily:'Neue Helvetica thin'}}>
                    {item.subTitle}
                  </Card.Subtitle>

                  <Card.Title className="text-center advanture-title" style={{fontFamily:'Neue Helvetica Medium'}}>{item.title}</Card.Title>
                  <Card.Text className={`text-center advanture-description ${descriptionClassName}`} style={{fontFamily:'Neue Helvetica thin'}}>
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HorizontalMiddleActiveCarousel;
