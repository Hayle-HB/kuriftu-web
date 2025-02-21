import React from "react";
import { Form, Row, Col } from "react-bootstrap";

interface FormFieldsProps {
  formValues: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormFields: React.FC<FormFieldsProps> = ({ formValues, handleInputChange }) => {
  return (
    <>
      {/* User Name Fields */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formres_firstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="res_firstname"
              value={formValues.res_firstname}
              onChange={handleInputChange}
              placeholder="Enter your first name"
            />
            <Form.Control.Feedback type="invalid">
              First Name is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formres_lastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="res_lastname"
              value={formValues.res_lastname}
              onChange={handleInputChange}
              placeholder="Enter your last name"
            />
            <Form.Control.Feedback type="invalid">
              Last Name is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      {/* Contact Information Fields */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formres_phone">
            <Form.Label>Phone No.</Form.Label>
            <Form.Control
              required
              type="text"
              name="res_phone"
              value={formValues.res_phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
            <Form.Control.Feedback type="invalid">
              Phone number is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formres_email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="res_email"
              value={formValues.res_email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
            <Form.Control.Feedback type="invalid">
              Valid email is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      {/* Address Fields */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control
              required
              type="text"
              name="country"
              value={formValues.country}
              onChange={handleInputChange}
              placeholder="Enter your country"
            />
            <Form.Control.Feedback type="invalid">
              Country is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              type="text"
              name="city"
              value={formValues.city}
              onChange={handleInputChange}
              placeholder="Enter your city"
            />
            <Form.Control.Feedback type="invalid">
              City is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      {/* Address & Postal Code */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              name="address"
              value={formValues.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
            />
            <Form.Control.Feedback type="invalid">
              Address is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formPostalCode">
            <Form.Label>Zip/Postal Code</Form.Label>
            <Form.Control
              required
              type="text"
              name="postalCode"
              value={formValues.postalCode}
              onChange={handleInputChange}
              placeholder="Enter your postal code"
            />
            <Form.Control.Feedback type="invalid">
              Postal Code is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      {/* Optional Fields */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formres_promo">
            <Form.Label>Promo Code</Form.Label>
            <Form.Control
              type="text"
              name="res_promo"
              value={formValues.res_promo}
              onChange={handleInputChange}
              placeholder="Enter promo code (optional)"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formres_specialRequest">
            <Form.Label>Special Request</Form.Label>
            <Form.Control
              as="textarea"
              name="res_specialRequest"
              value={formValues.res_specialRequest}
              onChange={handleInputChange}
              placeholder="Enter any special request (optional)"
              rows={3}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Terms Agreement */}
      <Form.Group className="mt-3">
        <Form.Check
          required
          name="acknowledgement"
          type="checkbox"
          label={
            <span>
              I agree to the{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Booking Terms and Conditions
              </a>
            </span>
          }
          checked={formValues.acknowledgement}
          onChange={handleInputChange}
        />
        <Form.Control.Feedback type="invalid">
          You must agree to the terms before proceeding.
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export default FormFields;
