import React from 'react'
import menu from "../../assests/icons/menu.png"
import MenuBar from './fullbar'

function Navbar() {
     
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
            <button type="button" class="btn btn-outline-dark" style={{width:'120px'}}>Sign In</button>
            </div>
         <div>
           <button type="button" class="btn" onClick={()=> console.log("sadsdsad")}>
           <img style={{width:"30px" , height : "30px"}} src={menu} alt="" />
           </button>
         </div>
          </div>
      </div>
  </div>
        </>
    )
}

export default Navbar
