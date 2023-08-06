import React from "react";
import "../../App.css"

function Navbar(props) {
  return (
    <>
      <div class="container-fluid async-navbar p-0">
            <div className="row p-0 navbar-container">
             <div className="col-lg-2 menu-item p-3">
              <a>Home</a>
              <a>Gallery</a>
             </div>
             <div className="col-lg-8 p-0 navbar-title">
             <p>UnBrkable Bonds</p>
             </div>
             <div className="col-lg-2 p-3 menu-item2">
              <a>Services</a>
              <a>About</a>
             </div>
            </div>
          </div>
    </>
  );
}

export default Navbar;
