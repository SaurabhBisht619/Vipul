import React from "react";
import "./styles.css";
import Navbar from "../../common/Navbar";
const Header = () => {
  return (
    <div>
      <div className="vist">Visit us Tiktok @brava.com</div>
      <Navbar />
      <div className="container">
        <div className="descriptionBox">
          <h1>Premium Zip Hoodies</h1>
          <button className="transparent-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
