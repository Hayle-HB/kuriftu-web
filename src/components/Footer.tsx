import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#f8f9fa",
      padding: "20px",
      fontSize: "14px",
      marginTop:'12px'
    },
    heading: {
      fontWeight: "bold",
      marginBottom: "15px",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      marginBottom: "8px",
    },
    signupButton: {
      fontWeight: "bold",
      backgroundColor: "#333",
      borderColor: "#333",
      color: "#fff",
    },
    socialIcons: {
      fontSize: "20px",
      marginRight: "10px",
      cursor: "pointer",
    },
    travelBadge: {
      width: "100px",
      marginTop: "10px",
    },
  };

  return (
    <footer style={styles.footer}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
        <Row className=" mb-4">
          <Col xs={12} sm={12} md={4} className="mb-3 signup-align text-start">
            {/* <h5 style={styles.heading}>Become A Member</h5> */}
          </Col>
        
          <Col xs={12} sm={12} md={4} className="mb-3 signup-align text-end">
            {/* <Button style={styles.signupButton}>Sign Up</Button> */}
          </Col>
        </Row>
        <Row style={{paddingLeft:'12px'}}>
          <Col xs={6} sm={6} md={2} className="text-start mb-3">
            <h6 className="fw-bold" style={{fontFamily:'Neue Helvetica Medium', textDecoration:'underLine'}}>More Information</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" style={{fontFamily:'Neue Helvetica thin'}} className="text-dark text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{fontFamily:'Neue Helvetica thin'}} className="text-dark text-decoration-none">
                  Contact Us
                </Link>
              </li>

            </ul>
          </Col>
          <Col xs={6} sm={6} md={2} className="text-start mb-3">
            <h6 className="fw-bold" style={{fontFamily:'Neue Helvetica Medium',textDecoration:'underLine'}}>Resorts</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/resorts/africanVillage"
                  className="text-dark text-decoration-none"
                  style={{fontFamily:'Neue Helvetica thin'}}
                >
                  African Village
                </Link>
              </li>
              <li>
                <Link
                  to="/resorts/bishoftu"
                  className="text-dark text-decoration-none"
                  style={{fontFamily:'Neue Helvetica thin'}}
                >
                  Bishoftu
                </Link>
              </li>
              <li>
                <Link
                  to="/resorts/entoto"
                  className="text-dark text-decoration-none"
                  style={{fontFamily:'Neue Helvetica thin'}}
                >
                  Entoto
                </Link>
              </li>
              <li>
                <Link
                  to="/resorts/lake-tana"
                  className="text-dark text-decoration-none"
                  style={{fontFamily:'Neue Helvetica thin'}}
                >
                  Lake Tana
                </Link>
              </li>
              <li>
                <Link
                  to="/resorts/awash"
                  className="text-dark text-decoration-none"
                  style={{fontFamily:'Neue Helvetica thin'}}
                >
                  Awash
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={6} md={4} className="text-start mb-3">
            <h6 className="fw-bold" style={{fontFamily:'Neue Helvetica Medium',textDecoration:'underLine'}}>Adventure</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/resorts/waterpark/adv/"
                  className="text-dark text-decoration-none"
                  style={{fontFamily:'Neue Helvetica thin'}}
                >
                  Waterpark
                </Link>
              </li>
              <li>
                <Link
                  to="/resorts/entoto/adv/"
                  className="text-dark text-decoration-none"
                  style={{fontFamily:'Neue Helvetica thin'}}
                >
                  Entoto
                </Link>
              </li>
            </ul>
            <h6 className="fw-bold" style={{fontFamily:'Neue Helvetica Medium',textDecoration:'underLine'}}>Wellness</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/resorts/boston"
                  className="text-dark text-decoration-none"
                  style={{fontFamily:'Neue Helvetica thin'}}
                >
                  Boston
                </Link>
              </li>
              <li>
                <Link
                  to="/resorts/entoto/well/"
                  className="text-dark text-decoration-none"
                  style={{fontFamily:'Neue Helvetica thin'}}
                >
                  Entoto
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={6} md={3} className="text-start mb-3">
            <h6 className="fw-bold" style={{fontFamily:'Neue Helvetica Medium',textDecoration:'underLine'}}>Socials</h6>
            <div className="d-flex flex-wrap gap-2 footer-links-container">
              <a
                href="https://www.instagram.com/kurifturesortspa/?hl=en"
                className="text-dark text-decoration-none"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/kuriftus?lang=en"
                className="text-dark text-decoration-none"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCI3Y6eDzcmAchDoGGVJZKgA/videos"
                className="text-dark text-decoration-none"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://www.facebook.com/kurifturesorts/"
                className="text-dark text-decoration-none"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/kuriftu-resorts/posts/?feedView=all"
                className="text-dark text-decoration-none"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <a className="power-by-link" target="blank" href="https://www.pier5studios.com/ ">
              <p style={{fontFamily:'Neue Helvetica thin'}}>
                All Copyright © 2024 Kuriftu Resort and Spa. Powered by PIER 5
                STUDIOS
              </p>
            </a>
          </Col>
        </Row>
    </footer>
  );
};

export default Footer;
