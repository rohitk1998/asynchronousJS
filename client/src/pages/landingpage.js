/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../components/Navbar";
function landingpage() {
  return <div class="container-fluid p-3 bg-light">
      <div className="row">
          <div className="col-sm-4 d-flex justify-content-center">
            <h5>asynchronousJS</h5>
          </div>
          <div className="col-sm-6">
            <div className="container">
            <div className="row">
            <div className="col-sm-2">
            <p>Home</p>
          </div>
          <div className="col-sm-2">
            <p>Blog</p>
          </div>
          <div className="col-sm-2">
            <p>Javascript</p>
          </div>
            </div>
            </div>
          </div>
          <div className="col-sm-2">

          <button type="button" class="btn btn-outline-dark" style={{width:'120px'}}>Sign In</button>

          </div>
      </div>
  </div>;
}

export default landingpage;
