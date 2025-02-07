import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ITEMS } from "../../MockData/items";
import {capitalizeFirstLetter} from "../../utils";
import {  useParams } from "react-router";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';
import useWindowDimensions from '../../Hooks/WindowDimensions';

gsap.registerPlugin(useGSAP, ScrollTrigger)




const ResortNavBar: React.FC=()=>{
    const { slug } = useParams<{ slug: string }>();
    // Get the items list based on the resort (slug)
    const itemsList = slug && ITEMS[slug] ? ITEMS[slug] : [];
    const location = useLocation();
    const navigate = useNavigate();
    const dimention = useWindowDimensions();

    const [activeLink, setActiveLink] = useState(location.pathname);
    const containerRef = useRef<HTMLParagraphElement | null>(null);


    useEffect(() => {
      setActiveLink(location.pathname);
    }, [location.pathname]);
    useGSAP(() => {
        const container = containerRef.current; 
        const notMobile = dimention.width / dimention.height > 1;  
        if (notMobile){
            gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'center 100px',
                scrub: true,
                markers: false
            }
        })
        .to(container, {
            ease: 'none',
            height: '=*0.85',
            backgroundColor: 'white',
            y: -50,
        }, 0);
        } 
    }, 
    { scope: containerRef });
    // Handle active tab link and navigation
    const handleActiveLink = (path: string, link: string) => {
    // Check if resort is 'boston' or 'africanVillage'
    if (slug === 'boston' || slug === 'africanVillage') {
      // If 'gallery' tab, navigate, else prevent navigation
      if (link === "gallery") {
        setActiveLink(path);
        navigate(path);
      } else {
        setActiveLink(path); // Highlight the tab but don't navigate for non-gallery tabs
      }
    } else {
      // For other resorts, navigate as usual
      setActiveLink(path);
      navigate(path);
    }
  };
    return(
        <Navbar
        expand="lg"
        className="resorts-nabvar"
        ref={containerRef}
      >
        <Container className="navbar-toggle-list">
          <Navbar.Brand
            as={Link}
            to={`/resorts/${slug}`}
            className="d-none d-lg-block fw-bold"
          >
            {slug && capitalizeFirstLetter(slug)}
          </Navbar.Brand>

          <Navbar.Collapse id="resort-navbar" className="d-none d-lg-block">
            {slug=="waterpark"?(
               <Nav style={{paddingLeft:'7%'}}>
               {/* Render tabs for all resorts */}
               {itemsList.map((item, index) => (
                 <Nav.Link
                   as={Link}
                   key={index}
                   to={`/resorts/${slug}/${item.link}`}
                   className={`px-3 ${
                     activeLink === `/resorts/${slug}/${item.link}`
                       && "fw-bold text-muted"
                      
                   }`}
                   onClick={(e) => {
                     e.preventDefault(); // Prevent default behavior of Link
                     handleActiveLink(`/resorts/${slug}/${item.link}`, item.link);
                   }}
                 >
                   {item.title}
                   {activeLink === `/resorts/${slug}/${item.link}` && (
                     <div className="active-underline mt-1"></div>
                   )}
                 </Nav.Link>
               ))}
             </Nav>
            ):(
              <Nav className="mx-auto">
              {/* Render tabs for all resorts */}
              {itemsList.map((item, index) => (
                <Nav.Link
                  as={Link}
                  key={index}
                  to={`/resorts/${slug}/${item.link}`}
                  className={`px-3 ${
                    activeLink === `/resorts/${slug}/${item.link}`
                      ? "fw-bold text-dark"
                      : "text-muted"
                  }`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default behavior of Link
                    handleActiveLink(`/resorts/${slug}/${item.link}`, item.link);
                  }}
                >
                  {item.title}
                  {activeLink === `/resorts/${slug}/${item.link}` && (
                    <div className="active-underline mt-1"></div>
                  )}
                </Nav.Link>
              ))}
            </Nav>
            )}
           
          </Navbar.Collapse>

          {/* Dropdown for smaller screens */}
          <Nav className="d-lg-none">
            <NavDropdown title={slug && capitalizeFirstLetter(slug)} align="end">
              {itemsList.map((item, index) => (
                <NavDropdown.Item
                  as={Link}
                  key={index}
                  to={`/resorts/${slug}/${item.link}`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default behavior of Link
                    handleActiveLink(`/resorts/${slug}/${item.link}`, item.link);
                  }}
                >
                  {item.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default ResortNavBar;