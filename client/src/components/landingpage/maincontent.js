import { useState } from "react";
import Modal from "../common/Modal/index";
import ".././../App.css"

const MainContent = ({ data }) => {
  return (
    <div className="container-fluid p-0">
      <div className="row p-0">
        <div className="col-sm-12 col-md-6 col-lg-4 col-xs-12 p-0 d-flex justify-content-start">
          <img className="main-crousal-img" src={data.image}/>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-8 col-xs-12 descriptions">
          <h1>
            <strong>
              {data.title}
            </strong>
          </h1>
          <p>
          {data.paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
