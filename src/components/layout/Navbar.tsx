import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <h1 className="logo">VitalityX</h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/supplements">Shop</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}