import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaAngleDown,
} from "react-icons/fa";
import "./styles.css"; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          Brand <FaAngleDown />
        </div>
        <div className="navbar-logo">
          Shop <FaAngleDown />
        </div>
        <div className="navbar-logo">
          Premium <FaAngleDown />
        </div>
        <div className="navbar-logo">Gift-Card</div>
        <div className="navbar-icons">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
