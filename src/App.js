import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Menu } from "@mui/material";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route  index element={<Home />} />
          <Route path="/menu"  element={<Menu/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/about"  element={<About/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
