import React, { useState, useEffect } from "react";

const Landingpage = () => {
  return (
      <div className="container landing-apge">
        <div className="row">
          <div className="col-sm-8">
            <div className="col-sm-12">
              <h1 className="h2_title1">asynchronous</h1>
            </div>
            <div className="col-sm-12">
              <h1 className="h2_title2"> Javascript</h1>
            </div>
          </div>
          <div className="col-sm-4 descriptions" >
            <h2 className="text-dark">
              asynchronousJS is a place
              <br />
              to write, read, and connect
            </h2>
            <p className="col text-muted">
              It's easy and free to post your thinking on any topic and connect
              with millions of readers.
            </p>
            <button
              type="button"
              class="btn btn-outline-dark"
              style={{ width: "120px", borderRadius: "12px" }}
            >
              Start Writing
            </button>
          </div>
        </div>
      </div>
  );
};

export default Landingpage;
