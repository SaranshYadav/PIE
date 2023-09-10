// pages/index.js
import React from "react";

const Home = () => {
  return (
    <div className="indcard">
      <h2>INDUSTRIES WE SERVE</h2>
      <div className="indcard2">
        <div className="indblock">
          <div className="indi">
            <img src="https://cdn4.iconfinder.com/data/icons/spots/512/factory-industry-512.png" alt="industryimage" />
            <h4>Ind1</h4>
          </div>
          <div>
            <img src="" alt="smallimage" />
          </div>
        </div>
        <div className="indblock">
          <div className="indi">
            <img src="https://cdn4.iconfinder.com/data/icons/spots/512/factory-industry-512.png" alt="industryimage" />
            <h4>Ind2</h4>
          </div>
          <div>
            <img src="" alt="smallimage" />
          </div>
        </div>
        <div className="indblock">
          <div className="indi">
            <img src="https://cdn4.iconfinder.com/data/icons/spots/512/factory-industry-512.png" alt="industryimage" />
            <h4>Ind3</h4>
          </div>
          <div>
            <img src="" alt="smallimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
