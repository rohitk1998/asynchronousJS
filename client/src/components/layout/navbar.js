import React from "react";
import menuicon from "../../assests/icons/menu.png";

import { useDispatch, useSelector } from "react-redux";
import { SHOW_HIDE_MENU,SHOW_SIGNIN_POPUP } from "../../redux/actioncreator/types";
import { useHistory } from "react-router-dom";
import Modal from "../common/Modal";
import Sticky from "react-sticky-el";



function Navbar(props) {
  const disptach = useDispatch();

  const showSignIn = useSelector((state)=> state.showSignIn.state)

  const history = useHistory();

  return (
    <>
    
      <div class="container-fluid p-3 async-navbar">
        <div className="row">
          <div className="col-sm-4 d-flex justify-content-center">
            <h3 onClick={() =>{history.push('/home')}} style={{cursor:'pointer'}}><strong>asynchronousJS</strong></h3>
          </div>
          <div className="col-sm-4">
            {/* <div className="container">
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
            </div> */}
          </div>
          <div className="col-sm-4 d-flex flex-row justify-content-around">
            
            <div>
              {/* <button
                type="button"
                // className="btn btn-outline-dark"
                style={{ width: "120px" }}
                // onClick={() => disptach({ type: SHOW_SIGNIN_POPUP })}
              > */}
                <Modal/>
              {/* </button> */}
            </div>
            <div>
              <button
                type="button"
                class="btn"
                data-toggle="modal"
                data-target="#menubarModal"
                onClick={() => disptach({ type: SHOW_HIDE_MENU })}
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
     <Modal/>
      
    </>
  );
}

export default Navbar;
