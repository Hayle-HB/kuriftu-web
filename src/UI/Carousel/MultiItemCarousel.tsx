import React, { useState } from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import BasicTile from "../Card/BasicTiles/BasicTile";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ItemProps = {
  image?: string;
  title: string;
  description: string;
  subtitle?: string;
};

type MultiItemCarouselProps = {
  items: ItemProps[];
  classNames: string;
};

const MultiItemCarousel: React.FC<MultiItemCarouselProps> = ({
  items,
  classNames,
}) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);

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
      <Slider className={`${classNames} carousel-multi-item`} dotsClass="slick-dots slick-dots-customize mt-4"  {...settings}>
        {items.map((item, idx) => (
          <div key={idx} className="carousel-item-custom">
            <Row className="d-flex justify-content-center">
              <Col className="carousel-col">
                <BasicTile item={item} index={idx} reveresed={false} hasLinks={false} third={true} />
              </Col>
            </Row>
          </div>
        ))}
      </Slider>     
  );
};

export default MultiItemCarousel;
