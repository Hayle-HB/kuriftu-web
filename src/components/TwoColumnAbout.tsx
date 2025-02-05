import { Container, Row, Col, Card, Button } from "react-bootstrap";

interface TwoColumnCardProps {
  title: string;
  description: string;
  image: string;
  linkText: string;
  link: string;
  index: number;
  isEnquiryForm: boolean;
}

const TwoColumnCard: React.FC<TwoColumnCardProps> = ({
  title,
  description,
  image,
  linkText,
  link,
  index,
  isEnquiryForm
}) => {
  return (
    <Container fluid  className="my-4  pt-1" >
      <Row className="mt-5 bg-white rounded about-sm-container" 
        // style={{ background: "#FFFFFF", marginTop: index !== 0 ? "20px" : "5px" }}
        style={{margin:'0% 3%'}}
        >
        {/* Image Column (Left Side) */}
        <Col xs={12} md={6} style={{padding:'0px'}}>
           <img
              className="two-column-image"
              style={{ width: "100%",height: "37rem", objectFit: "cover" }}
              src={image}
              alt={title}
                />
        </Col>

        {/* Text Column (Right Side) */}
        <Col xs={12} md={6} className="d-flex flex-column justify-content-between text-start">
          <Card.Body>
            <Card.Title className="two-column-title p-3" style={{fontFamily:'Neue Helvetica Medium'}}>{title}</Card.Title>
            <p className="welness-description two-column-description " style={{fontFamily:'Neue Helvetica thin',paddingLeft:'14px'}}>
            {description.split("<br />").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
            </p>
            </Card.Body>
          <Card.Footer className="bg-transparent border-0 mb-3 text-start">
            {isEnquiryForm ? (
              <Button variant="link" className="text-primary fw-bold" style={{ textDecoration: "none" }}>
                {linkText}
              </Button>
            ) : (
                <a style={{ padding:'12px', paddingBottom:'12px',fontWeight: '300', color: '#525252', fontSize:'1rem', }} href={link}>
                {linkText}
              </a>
            )}
          </Card.Footer>
        </Col>
      </Row>
    </Container>
  );
};

export default TwoColumnCard;