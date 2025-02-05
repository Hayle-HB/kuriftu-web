import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Container } from "react-bootstrap";
import { FeaturedItem } from "../interfaces/experiencModal";

interface HorizontalCardCarouselProps {
  items: FeaturedItem[];
  titleClass?: string;

}

const HorizontalCardCarousel: React.FC<HorizontalCardCarouselProps> = ({
  items,
  titleClass = "",

}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: items.length < 3 ? items.length : 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
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

  return (
    <Container className="my-4" style={{ padding: "20px" }}>
      <Slider {...settings}>
        {items.map((item: any, index) => (
          <Card key={index} style={{ border: "none", width: "100%", }}>
            <Card.Img
              variant="top"
              src={item.image}
              alt={item.title}
              style={{
                maxHeight: "25rem",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <Card.Body style={{ height: "150px", overflow: "hidden" }}>
            <Card.Subtitle className="mb-2 text-muted" style={{fontFamily: "Neue Helvetica thin",}}>
              {item.subTitle}
            </Card.Subtitle>

            <Card.Title
            style={{ textAlign: "start", fontFamily: "Neue Helvetica Medium", }}
            className={`mb-3 text-start ${titleClass}`}
          >
            {item.title}
          </Card.Title>  
            <p className=" welness-description" style={{fontFamily: "Neue Helvetica thin", textAlign:'left'}}>{item.description}</p>
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </Container>
  );
};

export default HorizontalCardCarousel;
