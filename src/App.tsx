import {useLocation, Outlet } from "react-router";
import { useLayoutEffect } from "react";

import Footer from "./UI/Footer/Footer";
  

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="App">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
