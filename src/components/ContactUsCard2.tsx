import { Container, Row, Col } from "react-bootstrap";
import { contactData } from "../MockData/contactUsData";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import useMediaQuery from "@mui/material/useMediaQuery";

const ContactUsCard2: React.FC = () => {
  // Detect screen size
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <Container className="py-5" style={{ marginTop: "20px" }}>
      {/* Heading */}
      <Row>
        <Col xs={12} className="mb-3">
          {isMobile ?(
             <h3 className="text-center contact-header" style={{ fontSize: "26px", fontWeight: "600", color: "#c2874a", fontFamily:"Neue Helvetica Medium",fontStyle:'normal', lineHeight:'26px' }}>
             Contact Us
           </h3>
          )
          :(
            <h3 className="text-start" style={{ fontSize: "26px", fontWeight: "600", color: "#c2874a", fontFamily:"Neue Helvetica Medium",fontStyle:'normal', lineHeight:'26px' }}>
            Contact Us
          </h3>
          )
        }
          
        </Col>
      </Row>

      {/* Main Content */}
      <Row className={`align-items-center ${isMobile ? "flex-column-reverse" : ""}`}>
        {/* Map Section */}
        <Col xs={12} md={6} className={`mb-4 ${isMobile ? "text-center" : ""}`}>
          <div style={{ position: "relative", width: "100%" }}>
            <img
              src="https://kurifturesorts.com/_nuxt/img/map.5029fd0.svg"
              alt="Ethiopia Map"
              className="img-fluid"
              style={{
                borderRadius: "8px",
                maxWidth: isMobile ? "90%" : "100%",
              }}
            />
          </div>
        </Col>

        {/* Contact Info Section */}
        <Col xs={12} md={6} className={`d-flex ${isMobile ? "flex-column text-center" : "align-items-start justify-content-between"}`}>
          {/* Phone Section */}
          <div>
            <h6
              className="contact-header"
              style={{
                fontSize: "1rem",
                fontWeight: "400",
                color: "#c2874a",
                textTransform: "capitalize",
                fontFamily: "Neue Helvetica Medium",
              }}
            >
              <PhoneIcon style={{ fontSize: "20px", verticalAlign: "middle" }} /> Phone
            </h6>
            <div>
              {contactData.phone.map((item) => (
                <p
                  key={item.location}
                  style={{
                    fontSize: isMobile ? "16px" : "20px",
                    marginBottom: "20px",
                    color: "#555",
                    textTransform: "lowercase",
                  }}
                >
                  <span 
                  className="contact-header"
                   style={{ fontWeight: "500" }}>{item.location}:</span> {item.number}
                </p>
              ))}
            </div>
          </div>

          {/* Email Section */}
          <div className={`${isMobile ? "mt-3" : ""}`}>
            <h6
            className="contact-header"
              style={{
                fontSize: "1rem",
                fontWeight: "400",
                color: "#c2874a",
                textTransform: "capitalize",
                fontFamily: "Neue Helvetica Medium",
              }}
            >
              <EmailIcon style={{ fontSize: "20px", verticalAlign: "middle" }} /> Email
            </h6>
            <div>
              {contactData.email.map((item, index) => (
                <p
                  key={index}
                  className="contact-header"
                  style={{
                    fontSize: isMobile ? "16px" : "20px",
                    marginBottom: "20px",
                    color: "#555",
                    textTransform: "lowercase",
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsCard2;
