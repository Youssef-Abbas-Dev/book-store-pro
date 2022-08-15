import { Link } from "react-router-dom";

const Navbar = ({toggle, setToggle}) => {
  return (
    <nav style={{left: toggle && "0"}} className="navbar">
      <ul className="navbar-links">
        <Link to="/" onClick={() => setToggle(false)} className="navbar-link">Home</Link>
        <Link to="/authors" onClick={() => setToggle(false)} className="navbar-link">Authors</Link>
        <li onClick={() => setToggle(false)} className="navbar-link">Blog</li>
        <li onClick={() => setToggle(false)} className="navbar-link">About Us</li>
        <li onClick={() => setToggle(false)} className="navbar-link">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
