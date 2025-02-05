import React, { useState } from "react";
import { Form, Button, Col, Row, Container, Card } from "react-bootstrap";
import CartItem from "./RoomCartItem";
import { useRoomContext } from "../context/RoomContext";
import TermsAndPolicyModal from "./PolicyAndTermsModal";
import { useNavigate } from "react-router";
import { getPaymentChapa, getPaymentSession } from "../services/resort";
import Header from "./Header/Header";
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress from MUI


const BookingForm: React.FC = () => {
  const { roomsCart } = useRoomContext();
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state


  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
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
    acknowledgement: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePayment = async () => {
    if (!formValues.acknowledgement) {
      alert("Please agree to the booking terms and conditions.");
      return;
    }

    setLoading(true); // Show loading spinner when payment is processing


    const amount = roomsCart.reduce(
      (total, item) => total + +item.room_price,
      0
    );

    // if(paymentMethod ==="dashen"){
    //   const { session }: any = await getPaymentSession({ amount });
    //   localStorage.setItem("form", JSON.stringify(formValues));
    //   navigate(`/payment/${session.id}`);
    // }

    // else{
    //   localStorage.setItem("form", JSON.stringify(formValues));
    //   const data ={
    //     first_name: formValues.res_firstname,
    //     last_name: formValues.res_lastname,
    //    email: formValues.res_email,
    //    phone_number: formValues.res_phone,
    //    amount:amount.toString()
    //   }
    //   const response = await getPaymentChapa(data);
    //   if(response.error){

    //   }
    //   else if(response.response){
    //     const url = response.response.data.checkout_url;
    //     window.open(url, "_blank") 
    //   }
    //   // redirect to 


    // }
    try {
      if(paymentMethod === "dashen"){
        const { session }: any = await getPaymentSession({ amount });
        localStorage.setItem("form", JSON.stringify(formValues));
        navigate(`/payment/${session.id}`);
      } else {
        localStorage.setItem("form", JSON.stringify(formValues));
        const data = {
          first_name: formValues.res_firstname,
          last_name: formValues.res_lastname,
          email: formValues.res_email,
          phone_number: formValues.res_phone,
          amount: amount.toString()
        };
        const response = await getPaymentChapa(data);
        if (response.error) {
          // Handle error if any
          console.error("Error processing payment:", response.error);
        } else if (response.response) {
          const url = response.response.data.checkout_url;
          window.open(url, "_blank");
        }
      }
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setLoading(false); // Hide the loader after processing
    }
  
  };

  return (
    <>
      <Header />
      <Container
        className="g-4 p-4"
        style={{ textAlign: "left", marginTop: "80px" }}
      >
        <Row>
          <Col xs={12} sm={12} md={8}>
            <Card className="mt-4">
              <Card.Body>
                <h2 className="mb-4" style={{fontFamily:' Neue Helvetica thin' }}>Booking Form</h2>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} md={6} controlId="formres_firstname">
                      <Form.Label style={{fontFamily:' Neue Helvetica thin' }}>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="res_firstname"
                        value={formValues.res_firstname}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        style={{fontFamily:' Neue Helvetica thin' }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} md={6} controlId="formres_lastname">
                      <Form.Label style={{fontFamily:' Neue Helvetica thin' }}>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="res_lastname"
                        value={formValues.res_lastname}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                        style={{fontFamily:' Neue Helvetica thin' }}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} md={6} controlId="formres_phone">
                      <Form.Label style={{fontFamily:' Neue Helvetica thin' }}>Phone No.</Form.Label>
                      <Form.Control
                        type="text"
                        name="res_phone"
                        value={formValues.res_phone}
                        onChange={handleInputChange}
                        placeholder="Enter your Phone number"
                        style={{fontFamily:' Neue Helvetica thin' }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} md={6} controlId="formres_email">
                      <Form.Label style={{fontFamily:' Neue Helvetica thin' }}>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="res_email"
                        value={formValues.res_email}
                        onChange={handleInputChange}
                        placeholder="Enter your Email"
                        style={{fontFamily:' Neue Helvetica thin' }}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} md={6} controlId="formCountry">
                      <Form.Label style={{fontFamily:' Neue Helvetica thin' }}>Country</Form.Label>
                      <Form.Control
                        type="text"
                        name="country"
                        value={formValues.country}
                        onChange={handleInputChange}
                        placeholder="Enter your country"
                        style={{fontFamily:' Neue Helvetica thin' }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} md={6} controlId="formAddress">
                      <Form.Label style={{fontFamily:' Neue Helvetica thin' }}>Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formValues.address}
                        onChange={handleInputChange}
                        placeholder="Enter your address"
                        style={{fontFamily:' Neue Helvetica thin' }}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} md={6} controlId="formres_promo">
                      <Form.Label style={{fontFamily:' Neue Helvetica thin' }}>Promo Code</Form.Label>
                      <Row>
                        <Col xs={8}>
                          <Form.Control
                            type="text"
                            name="res_promo"
                            value={formValues.res_promo}
                            onChange={handleInputChange}
                            placeholder="Enter promo code"
                            style={{fontFamily:' Neue Helvetica thin' }}
                          />
                        </Col>
                        <Col xs={4} className="d-flex align-items-center">
                          <Button variant="warning" className="w-100" style={{fontFamily:' Neue Helvetica thin' }}>
                            Apply Promo
                          </Button>
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group as={Col} md={6} controlId="formCity">
                      <Form.Label style={{fontFamily:' Neue Helvetica thin' }}>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={formValues.city}
                        onChange={handleInputChange}
                        placeholder="Enter your city"
                        style={{fontFamily:' Neue Helvetica thin' }}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md={6}
                      controlId="formres_specialRequest"
                    >
                      <Form.Label style={{fontFamily:' Neue Helvetica thin' }}>Special Request</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="res_specialRequest"
                        value={formValues.res_specialRequest}
                        onChange={handleInputChange}
                        placeholder="Enter your special request"
                        rows={3}
                        style={{fontFamily:' Neue Helvetica thin' }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} md={6} controlId="formPostalCode">
                      <Form.Label style={{fontFamily:' Neue Helvetica thin' }}>Zip/Postal Code</Form.Label>
                      <Form.Control
                        type="text"
                        name="postalCode"
                        value={formValues.postalCode}
                        onChange={handleInputChange}
                        placeholder="Enter your zip/postal code"
                        style={{fontFamily:' Neue Helvetica thin' }}
                      />
                    </Form.Group>
                  </Row>
                  {/* Acknowledgement */}
                  <Row className="mt-3">
                    <Col>
                      <Form.Group controlId="acknowledgement">
                        <Form.Check
                          name="acknowledgement"
                          type="checkbox"
                          style={{fontFamily:' Neue Helvetica thin' }}
                          label={
                            <p>
                              I agree with
                              <span
                                onClick={() => setShowModal(true)}
                                style={{
                                  fontWeight: "bold",
                                  color: "#a98137",
                                  marginLeft: "2px",
                                }}
                              >
                                Booking Terms and Conditions
                              </span>
                            </p>
                          }
                          checked={formValues.acknowledgement}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                    
                  <Row className="mt-3">
                    <h1 className="payment-platform" style={{fontFamily:' Neue Helvetica thin' }}>Payment Platform</h1>
                    <Col >
                      <Button 
                        onClick={()=>setPaymentMethod("dashen")}     
                        variant="primary" className="payment-btn" 
                        disabled={paymentMethod === "dashen"} 
                        style={{fontFamily:' Neue Helvetica thin' }} 
                        
                        >
                          
                        Dashen
                      </Button>
                      <Button
                        onClick={()=>setPaymentMethod("chapa")}       
                        variant="primary"  className="payment-btn"
                        disabled={paymentMethod === "chapa"} 
                        style={{fontFamily:' Neue Helvetica thin' }}>
                        Chappa
                      </Button>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                    <Button 
                        variant="primary" 
                        onClick={handlePayment}
                        style={{fontFamily:' Neue Helvetica thin' }}
                        disabled={loading} // Disable button while loading
                      >
                        {loading ? (
                          <CircularProgress size={24} style={{ color: 'white', marginRight: '10px' }} />
                        ) : (
                          "Confirm Booking"
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={4}>
            {roomsCart.map((item) => (
              <CartItem
                key={item.room_id}
                checkIn={item.checkIn}
                checkOut={item.checkOut}
                guests={item.guests}
                title={item.room_acc}
                total={+item.room_price}
                roomId={item.room_id}
                isShowDelete={false}
              />
            ))}
            <div>
              <p>
                Total: $
                {roomsCart.reduce((total, item) => total + item.room_price, 0)}
              </p>
              <p>Rooms: {roomsCart.length}</p>
            </div>
          </Col>
        </Row>
        <TermsAndPolicyModal
          show={showModal}
          onClose={() => setShowModal(false)}
        />
      </Container>
    </>
  );
};

export default BookingForm;
