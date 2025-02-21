import {useLocation, Outlet } from "react-router";
import { useLayoutEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./UI/Footer/Footer";
import { Container } from "react-bootstrap";


function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="app">
      <Header />
      <Container className="App">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
