import React from "react";
import { Card, Button } from "react-bootstrap";
import { ReservationItemModal } from "../MockData/reservationRooms";
import { useNavigate } from "react-router";

interface ReserveResortCardProps {
  item: ReservationItemModal;
  titleClass?: string;
  descriptionClass?: string;


}

const ReserveResortCard: React.FC<ReserveResortCardProps> = ({ 
  item ,
  titleClass = "",
  descriptionClass = "",

}) => {
  const navigate = useNavigate();
  return (
    <Card className="border-0 mt-3 mb-4 w-100 h-100 d-flex flex-column">
      <Card.Img
        className="w-100 img-fluid"
        variant="top"
        src={item.image}
        alt={item.title}
        style={{ objectFit: "cover", maxHeight: "18rem" }}
      />
      <Card.Body className="d-flex flex-column">
        <div className="flex-grow-1 ">
          <Card.Title style={{ textAlign: "center", fontFamily: "Neue Helvetica Medium", }}
            className={`mb-3  ${titleClass}`}>
            {item.title}
          </Card.Title>
          <p className={`fw-bold-para welness-description ${descriptionClass}`} style={{fontFamily: "Neue Helvetica Medium "}}>
            {item.subtitle}
          </p>
        </div>
        <hr className="m-0 w-[50% ] text-center" />
        <div className="text-center mb-2 mt-2" style={{fontFamily:'Neue Helvetica Medium'}}>
          {/* <div
            className="text-muted"
            style={{ textDecoration: "line-through", fontSize:'14px', fontWeight:'400', color:'gray',fontStyle:'normal'  }}
          >
            From {item.price}
          </div> */}
          <div className="fw-bold" style={{ fontSize:'14px', fontWeight:'400', color:'gray',fontStyle:'normal'  }} >From {item.price}</div>
          <div className={`fw-bold-para welness-description ${descriptionClass}`} style={{fontFamily: "Neue Helvetica Medium "}}>Per Night</div>
          <div className={`fw-bold-para welness-description ${descriptionClass}`} style={{fontFamily: "Neue Helvetica Medium "}} >Including Taxes & Fees</div>
        </div>
        <Button
          onClick={
            item.isAvailable
              ? () => navigate(`/${item.slug}/rooms`)
              : () => console.log("not available")
          }
          variant={item.isAvailable ? "primary" : "outline-dark"}
          disabled={!item.isAvailable}
          className="w-100 mt-auto"
          style={{fontFamily: "Neue Helvetica Medium ",}}        >
          {item.isAvailable ? "Book Now" : "Unavailable Now"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ReserveResortCard;
