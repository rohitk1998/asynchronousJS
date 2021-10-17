import { useState } from "react";
import Modal from "../common/Modal/index";

const MainContent = () => {


  return (
    <>
      <div className="row main-content p-4">
        <div className="col-sm-12 col-lg-6">
          <h1 className="h2_title1">asynchronous</h1>
          <h1 className="h2_title2"> Javascript</h1>
        </div>
        <div className="col-sm-10 col-lg-6 descriptions">
          <h2 className="text-dark">
            <strong>AsynchronousJS</strong> is a place
            <br />
            to write, read, and connect
          </h2>
          <p className="text-muted">
            It's easy and free to post your thinking on any topic
            <br />
            and connect with millions of readers.
          </p>
          <div>
          <button
        type="button"
        className="btn btn-outline-dark"
   
        style={{ width: "120px" }}
      >
    Start Writing
      </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
