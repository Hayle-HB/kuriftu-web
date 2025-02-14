import { useEffect, useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  experiencesNavBar,
  regions,
  resorts,
  wellnessNavBar,
} from "../../MockData/regions";
import { resortsAll } from "../../MockData/resortsAll";

const navBarMenus = [
  { id: "destinations", label: "Destinations", isLink: false },
  { id: "resorts", label: "Resorts", isLink: false },
  { id: "experiences", label: "Experiences", isLink: false },
  { id: "wellness", label: "Wellness", isLink: false },
  { id: "event", label: "Celebration & Events", isLink: true },
  { id: "bostonPackage", label: "Boston Day Spa Reservations", isLink: true },
  { id: "reservation", label: "Reservation", isLink: true },
  { id: "about", label: "About Us", isLink: true },
  { id: "contact", label: "Contact Us", isLink: true },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);


  const handleShow = () => setShow(true);
  const handleReset = () => {
    setShow(false);
    setSelectedMenu("");
    setSelectedDestination("");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="main-nav-bar d-flex justify-content-between align-items-center px-3"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
          color: "white",
        }}
      >
        <div className="d-flex align-items-center">
          <div
            className="menu-button"
            onClick={handleShow}
            style={{
              cursor:'pointer'
            }}
          >
            <i className="bi bi-list"></i>{'  '}<p>MENU</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <Link to={"/"}>
            <img
              style={{ color: "white", }}
              className="header-image"
              id="logo"
              src={require("../../assessts/svg/logo.svg").default}
              alt="kuriftu logo"
            />
          </Link>
        </div>
        <div className="header-btn-container">
          <Link
            to={"/reservation"}
            className="reserve-button"
          >
            Reserve
          </Link>
        </div>
      </nav>

      <Offcanvas
        show={show}
        onHide={handleReset}
        placement="start"
        style={{ width: "75%", maxWidth: "75%" }}
      >
        <Offcanvas.Header
          className="offcanvas-header-btn-fix"
          style={{ background: "white" }}
        >
          <Offcanvas.Title>
            <Link to="/" onClick={()=>setShow(false)}>
              <img
              className="side-bar-icon"
              id="logo"
              src={require("../../assessts/svg/logo.svg").default}
              alt="kuriftu logo"
            />
            </Link>
          </Offcanvas.Title>
          {/* Custom Close Button */}
          <button
            className="header-close-btn"
            onClick={handleReset} // Replace with your custom close function
          >
            &times; {/* Close icon */}
          </button>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="d-flex">
            {/* // Left Column */}
            <div className="col-4 border-end pe-3">
              <ul className="list-unstyled side-bar-menus">
                {navBarMenus.map((item) => (
                  <li key={item.id} className="mb-2">
                    {item.isLink ? (
                      <Link to={`/${item.id}`} onClick={()=>setShow(false)}
                      >{item.label}</Link>
                    ) : (
                      <Button
                        onClick={() => {
                          setSelectedMenu(item.id);
                          setSelectedDestination("");
                        }}
                        variant="link"
                        className="text-decoration-none p-0 text-black"
                      >
                        {item.label}
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {/* // Middle Column */}

            <div className="col-4 px-3 header-navbars">
              {selectedMenu === "destinations" && (
                <ul className="list-unstyled side-bar-menus">
                  <li className="mb-2">
                    <Link to={`/resorts`} onClick={()=>setShow(false)}>All Destinations</Link>
                  </li>
                  {regions.map((item, index) => (
                    <li key={index} className="mb-2">
                      <Button
                        onClick={() => setSelectedDestination(item.key)}
                        variant="link"
                        className="text-decoration-none p-0 text-black"
                      >
                        {item.label}
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
              {selectedMenu === "resorts" && (
                <ul className="list-unstyled side-bar-menus">
                  {resortsAll.map(
                    (resort) =>
                      resort.isShow && (
                        <li onClick={handleReset} key={resort.slug}>
                          <Link
                            className="text-decoration-none p-0 text-black"
                            to={`/resorts/${resort.slug}`}
                          >
                            {resort.name}
                          </Link>
                        </li>
                      )
                  )}
                </ul>
              )}

              {selectedMenu === "experiences" && (
                <ul className="list-unstyled side-bar-menus">
                  {experiencesNavBar.map((resort) => (
                    <li onClick={handleReset} key={resort.key}>
                      <Link
                        className="text-decoration-none p-0 text-black"
                        to={`/resorts/${resort.key}`}
                      >
                        {resort.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {selectedMenu === "wellness" && (
                <ul className="list-unstyled side-bar-menus">
                  {wellnessNavBar.map((resort) => (
                    <li onClick={handleReset} key={resort.key}>
                      <Link
                        className="text-decoration-none p-0 text-black"
                        to={`/resorts/${resort.key}`}
                      >
                        {resort.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* // right Column */}

            <div className="col-4 ps-3 header-navbars">
              {selectedDestination &&
                resorts[selectedDestination as keyof typeof resorts] && (
                  <ul className="list-unstyled">
                    {resorts[selectedDestination as keyof typeof resorts].map(
                      (resort) => (
                        <li onClick={handleReset} key={resort.key}>
                          <Link
                            className="text-decoration-none p-0 text-black"
                            to={`/resorts/${resort.key}`}
                          >
                            {resort.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                )}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
