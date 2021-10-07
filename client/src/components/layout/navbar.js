import React, { useEffect } from "react";
import menuicon from "../../assests/icons/menu.png";
import { useDispatch, useSelector } from "react-redux";
import { menuAction  } from "../../redux/actions/useraction"
// import { useHistory } from "react-router-dom";
// import Sticky from "react-sticky-el";
import Modal from "../common/Modal/index";

function Navbar(props) {
  
  const disptach = useDispatch();
  const state = useSelector((state)=> state )

  useEffect(()=>{
console.log(state)
  },[state])


  return (
    <>
      <div class="container-fluid p-3 async-navbar">
        <div className="row">
          <div className="col-sm-4 d-flex justify-content-center">
            <h3><strong>asynchronousJS</strong></h3>
          </div>
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4 d-flex flex-row justify-content-around">
            <div>
             
                <Modal/>
           
            </div>
            <div>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
