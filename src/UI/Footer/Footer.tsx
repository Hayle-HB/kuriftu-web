import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const socialLinks: Record<string,string> = {
  default: "https://www.instagram.com/kurifturesortbishoftu/",
  bishoftu: "https://www.instagram.com/kurifturesortbishoftu/",
  entoto: "https://www.instagram.com/kurifturesortentoto/",
  africanVillage: "https://www.instagram.com/kuriftuafricanvillage/",
  boston: "https://www.instagram.com/bostondayspa/",
  awash: "https://www.instagram.com/kuriftuawashfalls/",
  waterpark: "https://www.instagram.com/kuriftuwaterpark/",

}

const Footer = () => {

  const { slug } = useParams<{ slug: string }>();
  let socialLink = socialLinks.default;
  if (slug && socialLinks[slug] != null){
    socialLink = socialLinks[slug];
  }
  const styles = {
    
    
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
    <footer>
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
            <h6 >More Information</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-dark text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark text-decoration-none">
                  Contact Us
                </Link>
              </li>

            </ul>
          </Col>
          <Col xs={6} sm={6} md={2} className="text-start mb-3">
            <h6 >Resorts</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/resorts/africanVillage"
                  className="text-dark text-decoration-none"
                >
                  African Village
                </Link>
              </li>
              <li>
                <Link
                  to="/resorts/bishoftu"
                  className="text-dark text-decoration-none"
                >
                  Bishoftu
                </Link>
              </li>
              <li>
                <Link
                  to="/resorts/entoto"
                  className="text-dark text-decoration-none"
                >
                  Entoto
                </Link>
              </li>
              <li>
                <Link
                  to="/resorts/lake-tana"
                  className="text-dark text-decoration-none"
                >
                  Lake Tana
                </Link>
              </li>
              <li>
                <Link
                  to="/resorts/awash"
                  className="text-dark text-decoration-none"
                >
                  Awash
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={6} md={4} className="text-start mb-3">
            <h6 >Adventure</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/resorts/waterpark/adv/"
                  className="text-dark text-decoration-none"
                >
                  Waterpark
                </Link>
              </li>
              <li>
                <Link
                  to="/resorts/entoto/adv/"
                  className="text-dark text-decoration-none"
                >
                  Entoto
                </Link>
              </li>
            </ul>
            <h6 >Wellness</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/resorts/boston"
                  className="text-dark text-decoration-none"
                >
                  Boston
                </Link>
              </li>
              <li>
                <Link
                  to="/resorts/entoto/well/"
                  className="text-dark text-decoration-none"
                >
                  Entoto
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={6} md={3} className="text-start mb-3">
            <h6>Socials</h6>
            <div className="d-flex flex-wrap gap-2 footer-links-container">
              <a
                href={socialLink}
                target="_blank" rel="noreferrer"
                className="text-dark text-decoration-none"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/kuriftus?lang=en"
                target="_blank" rel="noreferrer"
                className="text-dark text-decoration-none"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCI3Y6eDzcmAchDoGGVJZKgA/videos"
                target="_blank" rel="noreferrer"
                className="text-dark text-decoration-none"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://www.facebook.com/kurifturesorts/"
                target="_blank" rel="noreferrer"
                className="text-dark text-decoration-none"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/kuriftu-resorts/posts/?feedView=all"
                target="_blank" rel="noreferrer"
                className="text-dark text-decoration-none"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            
              <p >
                All Copyright © 2025 Kuriftu Resort and Spa.
              </p>
              <p>
                Powered by <a className="power-by-link" target="_blank" rel="noreferrer" href="https://www.pier5studios.com/ ">PIER 5
                STUDIOS</a>.
              </p>
            
          </Col>
        </Row>
    </footer>
  );
};

export default Footer;
