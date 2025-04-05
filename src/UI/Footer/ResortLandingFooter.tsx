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
            <p>
                {resort.region}
              </p>
            <h6 className="title-sans">{resort.name}</h6>
          </Col>
          
          
          <Col md={4}>
            <div className="contact-text">
              
              <p>
                <i className="bi bi-telephone"></i>
                {" "}
                {resort.phone}
              </p>
              <p>
                <i className="bi bi-envelope"></i>
                {" "}
                {resort.email}
              </p>
            </div>
          </Col>
          <Col md={3}>
            <p>
                <i className="bi bi-geo-alt"></i>
                {" "}
                <a href={resort.location}>Get Direction</a>
            </p>
          </Col>
        
        </Row>:
        <></>
  );
};

export default ResortFooter;