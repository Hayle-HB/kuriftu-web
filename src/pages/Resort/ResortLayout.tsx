import { Outlet, useParams } from "react-router";
import { ITEMS } from "../../MockData/items";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header/Header";
import AvailabilityCheck from "../../components/AvailabilityCheck";

function capitalizeFirstLetter(str: string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ResortLayout = () => {
  const { slug } = useParams<{ slug: string }>();

  const location = useLocation();
  const navigate = useNavigate();
  // Get the items list based on the resort (slug)
  const itemsList = slug && ITEMS[slug] ? ITEMS[slug] : [];

  const [activeLink, setActiveLink] = useState(location.pathname);

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

  return (
    <div>
      <Header />
      <Navbar
        expand="lg"
        style={{ marginTop: "70px", zIndex: 10 }}
        className="border-bottom resorts-nabvar"
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
            <NavDropdown title={slug && capitalizeFirstLetter(slug)}>
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

      <Outlet />

      <AvailabilityCheck />

      <style>
        {`
          .active-underline {
            height: 2px;
            background-color: black;
            width: 100%;
          }
          .border-bottom {
            border-bottom: 1px solid #ddd;
          }
          .navbar-nav .nav-link {
            position: relative;
          }
          .navbar-nav .nav-link .active-underline {
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
          }
        `}
      </style>
    </div>
  );
};

export default ResortLayout;
