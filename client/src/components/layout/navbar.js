import React, { useEffect } from "react";
import menuicon from "../../assests/icons/menu.png";

import { useDispatch, useSelector } from "react-redux";
import { menuAction, SHOW_SIGNIN_POPUP } from "../../redux/actions/useraction";
import { useHistory } from "react-router-dom";
import Modal from "../common/Modal";
import Sticky from "react-sticky-el";

function Navbar(props) {
  const disptach = useDispatch();
  const state = useSelector((state) => state);
  const history = useHistory();
  return (
    <>
      <div class="container-fluid async-navbar p-0">
        <div className="row">
          <div className="col-sm-1 d-flex justify-content-center header-menu-logo p-0">
            <button
              type="button"
              class="btn"
              data-toggle="modal"
              data-target="#menubarModal"
              onClick={() => disptach(menuAction())}
            >
              <img
                style={{ width: "30px", height: "30px" }}
                src={menuicon}
                alt=""
              />
            </button>
          </div>
          <div className="col-sm-4 d-flex justify-content-start align-items-center p-0">
            <h1 className="header-menu-title"><strong>Strongest Bond</strong></h1>
          </div>
          <div className="col-sm-6 d-flex header-menu justify-content-center align-items-center p-0">
            <div className="row">
              <div className="col-sm-3 header-menu-text">Home</div>
              <div className="col-sm-3 header-menu-text">Gallery</div>
              <div className="col-sm-3 header-menu-text">Contact</div>
              <div className="col-sm-3 header-menu-text">About</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
