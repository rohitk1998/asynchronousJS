import React,{useState,useEffect} from "react";
import "../../css/landingpage.css";
const Landingpage = () => {
   return (
     <div className='Container'>   
      <div className="container">
      <div className="row m-3 ">
        <div className="col-sm-8 mt-4 mb-4  ">
          <div className="col-4">
            <h1 className="h2_title1">asynchronous</h1>
          </div>
          <div className="col-4 mt-3 ">
            <h1 className ='h2_title2'> JS</h1>
          </div>
        </div>

        <div className="col-sm-4 mt-5 mb-5">
          <h2 className='text-dark ' >
        
            asynchronousJS is a place
            <br />
            to write, read, and connect
          </h2>
          <p className="col text-muted" >
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </p>
          <button type="button" class="btn btn-outline-dark"   style={{ width: "120px" ,borderRadius:'12px'}}>Start Writing</button>

        </div>
      </div>
    
    </div>
    </div>

  );
};

export default Landingpage;
