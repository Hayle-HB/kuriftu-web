import React, { useState } from "react";
import { Button, Col, Row, Container, Card, Alert, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { useRoomContext } from "../../context/RoomContext";
import TermsAndPolicyModal from "../../components/PolicyAndTermsModal";
import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";
import {
  createReservation,
  processDashenPayment,
  processChapaPayment,
  ReservationPayloadProps
} from "../../services/resort";
import FormFields from "./FormFields"; // ✅ Import FormFields
import PaymentOptions from "./PaymentOptions"; // ✅ Import PaymentOptions
import CartItem from "../../components/RoomCartItem";

// Define form structure
interface FormValues {
  res_firstname: string;
  res_lastname: string;
  res_phone: string;
  res_email: string;
  country: string;
  address: string;
  res_promo?: string;
  city: string;
  res_specialRequest?: string;
  postalCode: string;
  acknowledgement: boolean;
  res_paymentMethod: string;
}

const BookingForm: React.FC = () => {
  const { roomsCart, globalCheckIn,  globalCheckOut } = useRoomContext();
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Initial form values
  const [formValues, setFormValues] = useState<FormValues>({
    res_firstname: "",
    res_lastname: "",
    res_phone: "",
    res_email: "",
    country: "",
    address: "",
    res_promo: "",
    city: "",
    res_specialRequest: "",
    postalCode: "",
    res_paymentMethod: "",
    acknowledgement: false,
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle Payment Process with validation
  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidated(true);
    setErrorMessage("");

    // Check if form is valid
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      return;
    }

    if (!formValues.acknowledgement) {
      setErrorMessage("Please agree to the booking terms and conditions.");
      return;
    }

    setLoading(true);
    try {
      const amount = roomsCart.reduce((total, item) => total + +item.room_price, 0);

      const formattedRooms = roomsCart.map((room) => ({
      room_price: room.room_price.toString(),
      room_acc: room.room_acc,
      room_id: room.room_id.toString(),
      room_number: room.room_number,
      room_location: room.room_location,
      adults: room.guests.adults,
      teens: room.guests.teens,
      kids: room.guests.kids,
    }));

    // 🔹 Create reservation payload
    const reservationPayload: ReservationPayloadProps = {
      roomsCart: formattedRooms,
      checkin: globalCheckIn || moment().format("YYYY-MM-DD"), // ✅ Use global dates
      checkout: globalCheckOut || globalCheckOut || moment().add(1, "days").format("YYYY-MM-DD"),// ✅ Use global dates
      Form: {
        ...formValues,
        res_paymentStatus: "Pending",
      },
    };

    console.log("🚀 Sending reservation payload:", reservationPayload);
      // 2️⃣ Create reservation first
      const reservationResponse = await createReservation(reservationPayload);
      console.log(reservationResponse);
      if (!reservationResponse.success) {
        throw new Error("Reservation failed. Please try again.");
      }
      const reservationId = reservationResponse.reservationId;
      console.log(reservationId)
      // 3️⃣ Process payment based on the selected method
      //make sure to send the reservation id with the payment query
      if (paymentMethod === "dashen") {
        const resortLocation = reservationPayload.roomsCart[0].room_location;
        const { session }: any = await processDashenPayment(amount, resortLocation, reservationId);
        navigate(`/payment/${session.id}`);
      } else {
        const chapaResponse = await processChapaPayment(formValues, amount.toString(), reservationId);
       // console.log(chapaResponse.data);
        if (chapaResponse.data.status === "success") {
            console.log(chapaResponse.data.data.data)
          window.open(chapaResponse.data.data.data.checkout_url, "_blank");
        }
      }
    } catch (error) {
      setErrorMessage("Payment failed. Please try again.");
      console.error("Payment failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container className="g-4 p-4" style={{ textAlign: "left", marginTop: "80px" }}>
        <Row>
          <Col xs={12} sm={12} md={8}>
            <Card className="mt-4">
              <Card.Body>
                <h2 className="mb-4">Booking Form</h2>

                {/* Show error message if exists */}
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                <Form noValidate validated={validated} onSubmit={handlePayment}>
                  <FormFields formValues={formValues} handleInputChange={handleInputChange} />
                  <PaymentOptions paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />

                  <Row className="mt-3">
                    <Col>
                      <Button variant="primary" type="submit" disabled={loading}>
                        {loading ? <CircularProgress size={24} style={{ color: "white" }} /> : "Confirm Booking"}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Room Cart */}
          <Col xs={12} sm={12} md={4}>
            {roomsCart.map((item) => (
              <CartItem
                key={item.room_id}
                roomId={item.room_id}
                title={item.room_acc}
                total={+item.room_price}
                checkIn={item.checkIn}
                checkOut={item.checkOut}
                guests={item.guests}
                isShowDelete={false}
              />
            ))}
          </Col>
        </Row>
      </Container>

      <TermsAndPolicyModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default BookingForm;
