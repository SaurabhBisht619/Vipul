import React from "react";
import Header from "../Header";
import Card from "../../common/Cards/index";
import data from "../../../constant";
import "./styles.css";
const Home = () => {
  return (
    <div className="main">
      <Header />
      <div className="card">
        {data.map((item) => (
          <Card
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
