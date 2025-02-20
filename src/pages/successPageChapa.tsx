import { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRoomContext } from "../context/RoomContext";
import moment from "moment";
import { postReservation } from "../services/resort";
interface GuestCounts {
  adults: number;
  teens: number;
  kids: number;
}

interface Room {
  room_id: number;
  room_number: string;
  guests: GuestCounts;
  checkIn?: string | null;
  checkOut?: string | null;
  room_price: number;
  room_acc: string;
  room_location: string | "";
}

type Form = {
  [key: string]: any;
};

const formatDate = (date: string): string => {
  return moment(date).format("YYYY-MM-DD");
};

const SuccessPageChapa = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { roomsCart, onClear } = useRoomContext();
  const [storedRoomsCart, setStoredRoomsCart] = useState<Room[]>([]);
  const reservationCalled = useRef(false); // Flag to ensure reservation is called only once

  useEffect(() => {
    if (roomsCart.length === 0) {
      const storedCart = localStorage.getItem("roomsCart");
      if (storedCart) {
        setStoredRoomsCart(JSON.parse(storedCart) as Room[]);
      } else {
        console.warn("No cart found, redirecting...");
        navigate("/");
      }
    } else {
      setStoredRoomsCart(roomsCart);
    }
  }, [roomsCart, navigate]);

  useEffect(() => {
    if (
      storedRoomsCart.length > 0 &&
      !reservationCalled.current
    ) {
      reservationCalled.current = true; // Set flag to true
      createReservation();
    }
  }, [ storedRoomsCart]);

  const createReservation = async () => {
    if (storedRoomsCart.length === 0) {
      console.warn("Rooms Cart is empty, skipping reservation.");
      return;
    }

    const checkIn = storedRoomsCart[0]?.checkIn;
    const checkOut = storedRoomsCart[0]?.checkOut;

    if (!checkIn || !checkOut) {
      console.error("Check-in or Check-out date is missing, cannot proceed.");
      return;
    }

    const formValue = localStorage.getItem("form");
    let form: Form | undefined;
    if (formValue) {
      try {
        form = JSON.parse(formValue);
      } catch (error) {
        console.error("Failed to parse form value:", error);
      }
    }

    const finalRooms = storedRoomsCart.map(
      ({ guests, checkIn, checkOut, ...rest }) => ({
        ...rest,
        ...guests,
      })
    );

    const payload = {
      rooms: finalRooms,
      checkin: formatDate(checkIn),
      checkout: formatDate(checkOut),
      Form: {
        ...form,
        res_paymentMethod: "bank_transfer",
        res_groupName: "Family Vacation",
        res_extraBed: "0",
        res_remark: "Late check-in requested",
        res_paymentStatus: "paid",
      },
    };

    try {
      await postReservation(payload);
      onClear();
      localStorage.clear();
      sessionStorage.clear();
    } catch (error) {
      console.error("Failed to create reservation:", error);
    }
  };

  return (
    <Container
      fluid
      className="p-5 bg-light d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="text-center">
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <h1 className="text-success">Booking Confirmed!</h1>
          <p className="lead mb-4">
            Thank you for choosing us. Your resort room booking is successful.
          </p>
          <Button as={Link as any} variant="outline-secondary" to="/">
            Return to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessPageChapa;
