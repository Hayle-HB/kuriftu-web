import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function BuyTicketBostonPackage() {
  const navigate = useNavigate(); // Initialize useNavigate
  const handleNextClick = () => {
    navigate("/booking-form"); // Navigate to the booking form page
  };
  return (
    <div className="booston-container"
      style={{
        fontFamily: "Neue Helvetica Medium",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop:'1%',
        paddingBottom:'1%',
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div className="booston-img" style={{ width: "40%" }}>
        {" "}
        <img
          src="https://kurifturesorts.com/_nuxt/img/pai_Boston.3fabb0c.png"
          style={{ width: "100%" }}
          height={'95%'}
        />{" "}
      </div>
      <div className="description-txt booston-img" style={{ width: "40%", textAlign:'left' }}>
        <h3 className="title-txt pt-4" style={{fontFamily:'Neue Helvetica Medium',}}>Packages Included
        </h3>
        <p style={{fontFamily:'Neue Helvetica thin', fontSize:'16px', lineHeight:'20px',fontWeight:'400',fontStyle:'normal', color:'#000'}}>NATURAL FACIAL</p>
        <p style={{fontFamily:'Neue Helvetica thin', fontSize:'16px', lineHeight:'20px',fontWeight:'400',fontStyle:'normal', color:'#000'}}>HAIR AND STYLE</p>
        <p style={{fontFamily:'Neue Helvetica thin', fontSize:'16px', lineHeight:'20px',fontWeight:'400',fontStyle:'normal', color:'#000'}}>STEAM SAUNA JACUZZI</p>
        <p style={{fontFamily:'Neue Helvetica thin', fontSize:'16px', lineHeight:'20px',fontWeight:'400',fontStyle:'normal', color:'#000'}}>HOT OIL MASSAGE 1HR</p>

        <p className="title-txt pt-4" style={{fontFamily:'Neue Helvetica Medium',}}>Quantity</p>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              width: "60%",
              textAlign: "end",
              background: "white",
              color: "black",
            }}
          >
            1
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <p style={{fontFamily:'Neue Helvetica thin', fontSize:'16px', lineHeight:'20px',fontWeight:'400',fontStyle:'normal', color:'#000', marginTop:'8px'}}>Total</p>
        <p className="title-txt pt-4" style={{fontFamily:'Neue Helvetica Medium',}}>
          ETB 0
        </p>

        <hr />
        <button style={{ background: "black", color: "white" }}
         onClick={handleNextClick} // Handle navigation on click

        >Next</button>
      </div>
    </div>
  );
}

export default BuyTicketBostonPackage;
