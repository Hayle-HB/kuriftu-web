import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Redirect to the home page
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <Row>
        <Col className="text-center">
          <h1 style={{ fontSize: "6rem", color: "#dc3545" }}>404</h1>
          <h2 className="mb-3">Page Not Found</h2>
          <p className="text-muted">
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>
          <Button variant="primary" onClick={handleGoBack}>
            Go Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
