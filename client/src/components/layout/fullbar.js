import React , {useEffect}  from "react";
import cancel from "../../assests/icons/cancel.png";
import { menu_items } from "./menuitems";
import { useDispatch , useSelector } from "react-redux"
import { userTypes }  from "../../redux/actions/actiontypes"



const MenuBar = (props) => {

  const disptach = useDispatch()
  const state = useSelector((state)=> state )


  useEffect(()=>{
    // console.log("state" , state)
},[state])

  return (
    <>
      <div className="menu-icon">
        <div class="container-fluid p-3">
          <div className="row">
            <div className="col-sm-2 d-flex justify-content-center"></div>
            <div className="col-sm-8"></div>
            <div className="col-sm-2 d-flex flex-row justify-content-center">
              <div>
                <button
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#menubarModal"
                  onClick={() => disptach({type : userTypes.SHOW_HIDE_MENU })}
                >
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src={cancel}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="container p-3 ">
            {menu_items.map((item, index) => {
              return (
                <div className="row" key={index}>
                  <div className="container">
                    <p>{item.item}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
