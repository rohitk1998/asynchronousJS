import { useState } from "react";
import Modal from "../common/Modal/index";
import ".././../App.css";

const MainContent = ({ data }) => {
  return (
    <div className="container-fluid p-0 w-100">
      <div className="row p-0 m-0">
        <div className="col-lg-8 col-sm-12 col-xs-12 p-0 m-0">
          <div className="image-container p-0 m-0">
            <img src={data.image} />
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 col-xs-12 main-content-text p-0 m-0">
         <div className="heading-container">
         <h1>
            {data.title}
          </h1>
          <p>{data.paragraph}</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
