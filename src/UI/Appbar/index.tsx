import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, Flip } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Flip, useGSAP);


export default function ButtonAppBar() {
  const location = useLocation();
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {

      if (location.pathname === "/"){
        const tl = gsap.timeline();

        tl.from('#logo', { 
          ease: "expo",
          scale: 4,
          delay: 0.5
        }, 0).from('.navbar-content',{
          backgroundColor: '#F5E2DF',
          ease: "expo",
          delay: 0.5
        }, 0);
        tl.from('.navbar-content', { 
          ease: "expoInOut",
          height: '100vh',
          duration: 0.3,
          delay: 0.15
        });
        tl.from(["#menu-button", "#login-button", ".navbar-hambergure"],{
          opacity: 0
        });

      }
      const el = container.current;

      if (el) {
        const navbar = el.querySelector(".navbar-content");
        const button = el.querySelector("#login-button");
        const logo = el.querySelector('#logo');
        const tl = gsap.timeline(
            {
              scrollTrigger: {
              trigger: el,
              start: "top+=400px top",
              end: "bottom top",
              scrub: true,
            }
          }
        );

        tl.to(navbar, { 
          ease: "none",
          backgroundColor: '#FCFAF3'
        }, 0);
        tl.to(button, {
          ease: "none",
          backgroundColor: '#363b36',
          color: '#FCFAF3'
        }, 0)
        
      }
    },
    { scope: container }
);
  return (
    <>
    <Navbar expand={'false'} fixed="top" className="navbar" ref={container}>
       <Container className="navbar-content" fluid>
        <Navbar.Toggle className='navbar-hambergure' aria-controls={'offcanvasNavbar-expand-false'} onClick={handleShow} />
        <Link to={'/'}><img id="logo" src={require('../../assessts/svg/logo.svg').default} alt='kuriftu logo' /></Link>
        <Link to={'/reservation'}><Button id="menu-button">BOOK</Button></Link>
        <Navbar.Offcanvas
            id='offcanvasNavbar-expand-false'
            aria-labelledby='offcanvasNavbarLabel-expand-false'
            placement="start"
            backdrop={false}
            
            show={show}
          >
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/reservation" onClick={handleClose}>Book A Reservation</Nav.Link>
                <Nav.Link as={Link} to="/resorts" onClick={handleClose}>Destinations</Nav.Link>
                <Nav.Link as={Link} to="/experiences" onClick={handleClose}>Experiences</Nav.Link>
                <Nav.Link as={Link} to="/wellness" onClick={handleClose}>Wellness</Nav.Link>
              </Nav>
            </Offcanvas.Body>
            
          </Navbar.Offcanvas>
       </Container>
    </Navbar>
    </>
  );
}
