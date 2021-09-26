import React from "react";
import menuicon from "../../assests/icons/menu.png";

function Navbar(props) {
  return (
    <>
      <div class="container-fluid p-3 bg-light">
        <div className="row">
          <div className="col-sm-4 d-flex justify-content-center">
            <p>asynchronousJS</p>
          </div>
          <div className="col-sm-4">
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
          <div className="col-sm-4 d-flex flex-row justify-content-around">
            <div>
              <button
                type="button"
                class="btn btn-outline-dark"
                style={{ width: "120px" }}
              >
                Sign In
              </button>
            </div>
            <div>
              <button
                type="button"
                class="btn"
                data-toggle="modal"
                data-target="#menubarModal"
                onClick={()=> props.showMenuCallbackFunc()}
              >
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={menuicon}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
