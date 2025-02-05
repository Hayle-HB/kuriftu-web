import { Outlet } from "react-router";
import Footer from "./components/Footer";
//components

function App() {
  return (
    <div className="App">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
