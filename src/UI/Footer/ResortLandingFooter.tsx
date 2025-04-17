import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import {RESORTDETAILS} from "../../MockData/resortsDetails";
import { ResortDetailsModal } from "../../interfaces/resortDetailModal";

type ResortFooterProps={
    resort?: ResortDetailsModal;
}

const ResortFooter:React.FC<ResortFooterProps> = ({resort}) => {
   
  return (
        resort ?
        <Row className="footer-resort-landing">
          <Col md={4}>
            <p className="footer-resort-landing-region">
                {resort.region}
              </p>
            <h6 className="title-sans">{resort.name}</h6>
          </Col>
          
          
          <Col md={4}>
            <div className="contact-text">
              <h5>Contact Us</h5>
              <p className="footer-resort-landing-phone">
                <i className="bi bi-telephone"></i>
                {"   "}
                <span>
                {
                  resort.phone.split(",").map((p,i)=>(
                    <p key={i}>{p}</p>
                  ))
                }</span>
              </p>
              <p>
                <i className="bi bi-envelope"></i>
                {"   "}
                {resort.email}
              </p>
            </div>
          </Col>
          <Col md={3}>                
                <h5>Getting Here</h5>
                <p><i className="bi bi-geo-alt"></i>
                {"  "}{resort.direction}</p>
                <p><i className="bi bi-map"></i>{'    '}<a href={resort.location}>Get Direction</a></p>
          </Col>
        
        </Row>:
        <></>
  );
};

export default ResortFooter;