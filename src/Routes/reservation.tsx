import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header/Header";
import ReservationCard from "../UI/Card/ReservationCard";
import { reservationRooms } from "../MockData/reservationRooms";

const Reservation = () => {
  return (
    <div>
      <Container className="reservation-content"
      fluid
       
      >
        <Row className="reservation-resort-main g-4 p-3" style={{ width: "100%", }}>
          {reservationRooms.map((item, index) => (
            <Col sm={12} md={6} lg={4} key={index} className="reservation-resort-contant">
              <ReservationCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Reservation;
