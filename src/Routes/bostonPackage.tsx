// src/pages/ResortDetails.tsx
import React, { useState } from "react";
import {RESORTDETAILS} from "../MockData/resortsDetails";
import {Gallery} from "../MockData/gallery";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from '../UI/Carousel';
import Form from 'react-bootstrap/Form';
import ListHero from "../UI/Hero/ListHero";
import { Link } from "react-router-dom";

const BostonPackage: React.FC = () => {
  const slug = 'boston';
  const galleryImages = Gallery[slug];
  
  const itemPrice = 200;
  const itemTitle = "Boston Day Spa Package";
  const itemDescription = "Experience the ultimate blend of relaxation and rejuvenation with a luxurious spa package designed to refresh your body, mind, and spirit.";
  const itemList = {
    title: "",
    items: ['Natural Facial', 'Hair and Style', 'Steam, Sauna, and Jacuzzi', 'Hot oil massage (1 Hour)']
  }

  const [quantity, setQuantity] = useState<number>(0);
  return (
    <Container className="product-wrapper">
        <Container className="product">
            <Row>
                <Carousel slides={galleryImages} classNames="product-image" />
            </Row>
            <Row className="mb-4">
                <h1>{itemTitle}</h1>
            </Row>
            <Form>
                <Row>
                    <Col sm={12} md={6}>
                        
                        <Row className="product-price">
                            <Col xs={6}>
                                <Form.Select aria-label="quantity" onChange={(e)=> setQuantity(Number(e.target.value))}>
                                    <option>Quantity</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                
                            </Col>
                            <Col xs={6}>
                                <h5>Total Price</h5> 
                                <p>ETB {itemPrice * quantity}</p>
                            </Col>
                        </Row>
                        <Row className="product-button">
                            <Link to={`/reservation`}>Make a Reservation</Link>
                        </Row>
                    </Col>
                    <Col sm={12} md={6} className="product-description">
                        <Row>
                            <p>{itemDescription}</p>
                        </Row>
                        <Row>
                            <ul>
                                {itemList.items.map((item, index)=>(
                                    <li key={index}><p>{item}</p></li>
                                ))}
                            </ul>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Container>
    </Container>
  );
};

export default BostonPackage;
