import React from "react";
import "./styles.css";
const Card = ({ imageUrl, title, link }) => {
  return (
    <div className="wrapper">
      <div className="firstHalf">
        <img className="image" src={imageUrl} alt="Card" />
      </div>
      <div className="secondHalf">
        <div className="title">{title}</div>
        <a className="link" href={link}>
          Shop now
        </a>
      </div>
    </div>
  );
};

export default Card;
