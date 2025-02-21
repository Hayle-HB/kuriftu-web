import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateReservation } from "../services/resort";

const SuccessPageChapa = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isUpdated, setIsUpdated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // ✅ Extract reservationId from URL parameters
  const searchParams = new URLSearchParams(location.search);
  const reservationID = searchParams.get("reservationID");

  useEffect(() => {
    if (!reservationID) {
      setErrorMessage("No reservation ID found.");
      console.error("No reservation ID found in the URL.");
      return;
    }

    const updatePaymentStatus = async () => {
      try {
        console.log("🔄 Updating payment status for reservation:", reservationID);
        await updateReservation({ reservationID, paymentStatus: "paid" });

        setIsUpdated(true);
        console.log("✅ Payment status updated successfully.");
      } catch (error) {
        setErrorMessage("Failed to update reservation payment status.");
        console.error("❌ Error updating reservation:", error);
      }
    };

    updatePaymentStatus();
  }, [reservationID]);

  return (
    <Container
      fluid
      className="p-5 bg-light d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="text-center">
        <Col xs={12} md={8} lg={6} className="mx-auto">
          {isUpdated ? (
            <>
              <h1 className="text-success">Payment Successful!</h1>
              <p className="lead mb-4">
                Your reservation has been confirmed and the payment has been processed.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-warning">Processing Payment...</h1>
              <p className="lead mb-4">
                {errorMessage || "Please wait while we update your reservation."}
              </p>
            </>
          )}

          <Button as={Link as any} variant="outline-secondary" to="/">
            Return to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessPageChapa;
