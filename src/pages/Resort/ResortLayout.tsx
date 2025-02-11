import { Outlet, useParams } from "react-router";

import Header from "../../components/Header/Header";
import AvailabilityCheck from "../../UI/AvailabilityCheck/AvailabilityCheck";
import ResortNavBar from "../../UI/NavBar/ResortNavBar";


const ResortLayout = () => {
 

  
  

  return (
    <div>
      <Header />
      <ResortNavBar />
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
