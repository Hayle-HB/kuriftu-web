import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { RESORTDETAILS } from "../../MockData/resortsDetails";
import ResortFooter from "./ResortLandingFooter";
import "./styles.css";

type SocialLinks = {
  [key: string]: string;
  default: string;
  bishoftu: string;
  entoto: string;
  africanVillage: string;
  boston: string;
  awash: string;
  waterpark: string;
};

const footerData = {
  socialLinks: {
    default: "https://www.instagram.com/kurifturesortbishoftu/",
    bishoftu: "https://www.instagram.com/kurifturesortbishoftu/",
    entoto: "https://www.instagram.com/kurifturesortentoto/",
    africanVillage: "https://www.instagram.com/kuriftuafricanvillage/",
    boston: "https://www.instagram.com/bostondayspa/",
    awash: "https://www.instagram.com/kuriftuawashfalls/",
    waterpark: "https://www.instagram.com/kuriftuwaterpark/",
  } as SocialLinks,
  contactInfo: {
    phone: "+251911091185",
    email: "booking@kurifturesorts.com",
  },
  footerLinks: {
    information: [
      { label: "About Us", path: "/about" },
      { label: "Contact Us", path: "/contact" },
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms & Conditions", path: "/terms" },
    ],
    resorts: [
      { label: "African Village", path: "/resorts/africanVillage" },
      { label: "Bishoftu", path: "/resorts/bishoftu" },
      { label: "Entoto", path: "/resorts/entoto" },
      { label: "Lake Tana", path: "/resorts/lake-tana" },
      { label: "Awash", path: "/resorts/awash" },
    ],
    adventure: [
      { label: "Waterpark", path: "/resorts/waterpark/adv/" },
      { label: "Entoto Adventure", path: "/resorts/entoto/adv/" },
    ],
    wellness: [
      { label: "Boston Spa", path: "/resorts/boston" },
      { label: "Entoto Wellness", path: "/resorts/entoto/well/" },
    ],
  },
  socialMedia: [
    {
      icon: "fa-brands fa-instagram",
      url: "https://www.instagram.com/kurifturesortbishoftu/",
    },
    {
      icon: "fa-brands fa-twitter",
      url: "https://twitter.com/kuriftus?lang=en",
    },
    {
      icon: "fa-brands fa-youtube",
      url: "https://www.youtube.com/channel/UCI3Y6eDzcmAchDoGGVJZKgA/videos",
    },
    {
      icon: "fa-brands fa-facebook",
      url: "https://www.facebook.com/kurifturesorts/",
    },
    {
      icon: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/company/kuriftu-resorts/posts/?feedView=all",
    },
  ],
};

const Footer = () => {
  const { slug } = useParams<{ slug: string }>();
  const socialLink =
    slug && footerData.socialLinks[slug]
      ? footerData.socialLinks[slug]
      : footerData.socialLinks.default;

  const resort = slug ? RESORTDETAILS[slug] : null;

  return (
    <footer className="footer-wrapper">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      {resort && <ResortFooter resort={resort} />}

      <Container>
        <Row className="footer-content">
          <Col xs={12} sm={6} md={3} className="footer-section">
            <h6>More Information</h6>
            <ul className="footer-links">
              {footerData.footerLinks.information.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="contact-info">
                <i className="bi bi-telephone"></i>
                <span>{footerData.contactInfo.phone}</span>
              </li>
              <li className="contact-info">
                <i className="bi bi-envelope"></i>
                <span>{footerData.contactInfo.email}</span>
              </li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3} className="footer-section">
            <h6> Kuriftu Resort & Spa </h6>
            <ul className="footer-links">
              {footerData.footerLinks.resorts.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3} className="footer-section">
            <h6>Adventure & Wellness</h6>
            <div className="footer-subsection">
              <h6 className="subsection-title">Adventure</h6>
              <ul className="footer-links">
                {footerData.footerLinks.adventure.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-subsection">
              <h6 className="subsection-title">Wellness</h6>
              <ul className="footer-links">
                {footerData.footerLinks.wellness.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="footer-section">
            <h6>Connect With Us</h6>
            <div className="social-links">
              {footerData.socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col className="text-center">
            <p className="copyright">
              © {new Date().getFullYear()} Kuriftu Resort and Spa. All rights
              reserved.
            </p>
            <p className="powered-by">
              Powered by{" "}
              <a
                href="https://www.pier5studios.com/"
                target="_blank"
                rel="noreferrer"
                className="power-by-link"
              >
                PIER 5 STUDIOS
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
