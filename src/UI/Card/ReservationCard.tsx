import { ReservationItemModal } from "../../MockData/reservationRooms";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
interface ReserveResortCardProps {
  item: ReservationItemModal;
  titleClass?: string;
  descriptionClass?: string;
}
const ReservationCard: React.FC<ReserveResortCardProps> = ({ 
  item ,
  titleClass = "",
  descriptionClass = "",

}) => {
    const navigate = useNavigate();
  return (
    <Card className="border-0 mt-3 mb-4 w-100 h-100 d-flex flex-column card-res">
      <Card.Img
        className="w-100 img-fluid card-res-image"
        variant="top"
        src={item.image}
        alt={item.title}
        style={{ objectFit: "cover", maxHeight: "18rem" }}
      />
      <Card.Body className="d-flex flex-column card-res-body">
        <div className="card-res-heading">
          <Card.Title as='h1'>
            {item.title}
          </Card.Title>
          <p>
            {item.subtitle}
          </p>
        </div>
        <hr className="m-0 w-[50% ] text-center" />
        <div className=" mb-2 mt-2 card-res-body" >
            <p>Per Night</p>
            <p >Including Taxes & Fees</p>
            <h5>{item.price}+</h5>
        </div>
        <Button
          onClick={
            item.isAvailable
              ? () => navigate(`/${item.slug}/rooms`)
              : () => console.log("not available")
          }
          variant={item.isAvailable ? "primary" : "outline-dark"}
          disabled={!item.isAvailable}
          className="w-100"       >
          {item.isAvailable ? "Book Now" : "Unavailable Now"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ReservationCard;