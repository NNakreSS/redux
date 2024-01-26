// CSS
import "./App.css";
// ROTUE
import { Routes, Route, Link, NavLink } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
