import React from "react";
import { Link } from "react-router-dom";

const Card3 = () => {
  return (
    <div className="contain-card-3">
      <div className="card3">
        <div className="article-card-3">
          <h1>
            <strong>Sewa Mobil di Indramayu Sekarang</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button className="button1"><Link to="/search">
          <strong>Mulai Sewa Mobil</strong></Link>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card3;
