import React from "react";
import HomeCounter from "../component/homeCounter/HomeCounter";
const HomePage = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <HomeCounter name="tan" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
