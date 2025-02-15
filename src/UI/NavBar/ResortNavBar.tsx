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
    console.log(itemsList);
    const itemsOptions = [
    {
      title: "Accomodation",
      link: "acc",
    },
    {
      title: "Experiences",
      link: "exp",
    },
    {
      title: "Wellness",
      link: "well",
    },
    {
      title: "Dining",
      link: "dining",
    },
    {
      title: "Corporate",
      link: "corp",
    },
    {
      title: "Celebration",
      link: "event",
    },
    {
      title: "Gallery",
      link: "gallery",
    },

  ];
    const location = useLocation();
    const navigate = useNavigate();
    const dimention = useWindowDimensions();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const containerRef = useRef<HTMLParagraphElement | null>(null);


    const handleActiveLink = (path: string, link: string, disabled: boolean) => {
        if (disabled) return;
        if (slug === 'boston' || slug === 'africanVillage') {
            if (link === "gallery") {
                setActiveLink(path);
                navigate(path);
            } else {
                setActiveLink(path);
            }
        } else {
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
              <Nav className="mx-auto">
              {/* Render tabs for all resorts */}
              {itemsOptions.map((option, index) => {
                    const item = itemsList.find(i => i.link === option.link);
                    const isAvailable = !!item;
                    return (
                        <Nav.Link
                            as={Link}
                            key={index}
                            to={`/resorts/${slug}/${option.link}`}
                            className={`px-3 ${
                                activeLink === `/resorts/${slug}/${option.link}` && "fw-bold text-dark"
                            } ${!isAvailable ? "text-muted disabled" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleActiveLink(`/resorts/${slug}/${option.link}`, option.link, !isAvailable);
                            }}
                        >
                            {item ? capitalizeFirstLetter(item.title) : capitalizeFirstLetter(option.title)}
                            {activeLink === `/resorts/${slug}/${option}` && <div className="active-underline mt-1"></div>}
                        </Nav.Link>
                    );
                })}
            </Nav>
           
          </Navbar.Collapse>

          {/* Dropdown for smaller screens */}
          <Nav className="d-lg-none">
            <NavDropdown title={slug && capitalizeFirstLetter(slug)} align="end">
                {itemsOptions.map((option, index) => {
                    const item = itemsList.find(i => i.link === option.link);
                    const isAvailable = !!item;
                    return (
                        <NavDropdown.Item
                            as={Link}
                            key={index}
                            to={`/resorts/${slug}/${option.link}`}
                            className={!isAvailable ? "disabled" : ""}
                            onClick={(e) => {
                                if (!isAvailable) {
                                    e.preventDefault();
                                    return;
                                }
                                handleActiveLink(`/resorts/${slug}/${option}`, option.link, !isAvailable);
                            }}
                        >
                            {item ? capitalizeFirstLetter(item.title) : capitalizeFirstLetter(option.title)}
                        </NavDropdown.Item>
                    );
                })}
            </NavDropdown>
        </Nav>
        </Container>
      </Navbar>
    )
}
export default ResortNavBar;