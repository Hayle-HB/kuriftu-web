import React from "react";
import { Button, Row, Col } from "react-bootstrap";

interface PaymentOptionsProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <>
      <h3 className="mt-4">Select Payment Method</h3>
      <Row>
        <Col>
          <Button variant="primary" className="payment-btn" onClick={() => setPaymentMethod("dashen")} disabled={paymentMethod === "dashen"}>
            Dashen
          </Button>
          <Button variant="primary" className="payment-btn" onClick={() => setPaymentMethod("chapa")} disabled={paymentMethod === "chapa"}>
            Chapa
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default PaymentOptions;
