import React, { useState, useEffect } from "react";
import menu from "../../assests/icons/menu.png";
import abc from "../../assests/icons/abc.jpeg";
import mnb from "../../assests/icons/mnb.jpeg";
import xyz from "../../assests/icons/xyz.jpeg";
import poi from "../../assests/icons/poi.jpeg";
import {BlogCard} from "../common/blogcard"

const Landingpage = () => {

  return (
    <div className="container-fluid landing-apge">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
       
            <h1 className="h2_title1"> 
              asynchronous
            </h1>
            <h1 className="h2_title2"> Javascript</h1>
        </div>
        <div className="col-sm-12 col-lg-6 descriptions">
          <h2 className="text-dark">
            <strong>AsynchronousJS</strong>  is a place
            <br />
            to write, read, and connect
          </h2>
          <p className="col text-muted">
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </p>
          <button
            type="button"
            class="btn btn-dark"
            style={{ width: "120px"}}
          >
            Start Writing
          </button>
        </div>
      </div>
      <div className="container">
          <div className="list">
            <h5>
              <span>
                <svg
                  style={{ marginBottom: "4px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-up-right-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                </svg>{" "}
              </span>
              Trending on asynchronousJS
            </h5>
            <ol>
              <div className="trending_list1">
                <li>
                  <div className="Card">
                    <span
                    className='trending_span'
                   
                    >
                      {" "}
                      <img src={abc} alt="Avatar" class="avatar" />
                      <p style={{ paddingLeft: "12px" }}>
                        Yesterday Andrei Tapalaga ✒️ in History of Yesterday
                      </p>
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <img src={mnb} alt="Avatar" class="avatar1" />

                      <p style={{ paddingLeft: "10px" }}>
                        {" "}
                        Chernobyl’s Blown Up Reactor 4 Just Woke Up
                      </p>
                    </div>{" "}
                    <p style={{ paddingTop: "1rem" }}>Sep 08</p>

                  </div>
                </li>
                <li>
                  <div className="Card">
                    <span
                                         className='trending_span'

                    >
                      {" "}
                      <img src={xyz} alt="Avatar" class="avatar" />
                      <p style={{ paddingLeft: "12px" }}>
                        Yesterday Andrei Tapalaga ✒️ in History of Yesterday
                      </p>
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <img src={poi} alt="Avatar" class="avatar1" />

                      <p style={{ paddingLeft: "10px" }}>
                        {" "}
                        Chernobyl’s Blown Up Reactor 4 Just Woke Up
                      </p>
                    </div>{" "}
                    <p style={{ paddingTop: "1rem" }}>Sep 08</p>

                  </div>
                </li>
                <li>
                  {" "}
                  <div className="Card">
                    <span
                                        className='trending_span'

                    >
                      {" "}
                      <img src={abc} alt="Avatar" class="avatar" />
                      <p style={{ paddingLeft: "12px" }}>
                        Yesterday Andrei Tapalaga ✒️ in History of Yesterday
                      </p>
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <img src={xyz} alt="Avatar" class="avatar1" />

                      <p style={{ paddingLeft: "10px" }}>
                        {" "}
                        Chernobyl’s Blown Up Reactor 4 Just Woke Up
                      </p>
                    </div>{" "}
                    <p style={{ paddingTop: "1rem" }}>Sep 08</p>
                  </div>
                </li>
              </div>
              <div className="trending_list2">
                <li>
                  <div className="Card">
                    <span
                                        className='trending_span'

                    >
                      {" "}
                      <img src={poi} alt="Avatar" class="avatar" />
                      <p style={{ paddingLeft: "12px" }}>
                        Yesterday Andrei Tapalaga ✒️ in History of Yesterday
                      </p>
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <img src={mnb} alt="Avatar" class="avatar1" />

                      <p style={{ paddingLeft: "10px" }}>
                        {" "}
                        Chernobyl’s Blown Up Reactor 4 Just Woke Up
                      </p>
                    </div>{" "}
                    <p style={{ paddingTop: "1rem" }}>Sep 08</p>

                  </div>
                </li>
                <li>
                  <div className="Card">
                    <span
                                         className='trending_span'

                    >
                      <img src={mnb} alt="Avatar" class="avatar" />
                      <p style={{ paddingLeft: "12px" }}>
                        Yesterday Andrei Tapalaga ✒️ in History of Yesterday
                      </p>
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <img src={xyz} alt="Avatar" class="avatar1" />

                      <p style={{ paddingLeft: "10px" }}>
                        {" "}
                        Chernobyl’s Blown Up Reactor 4 Just Woke Up
                      </p>
                    </div>{" "}
                    <p style={{ paddingTop: "1rem" }}>Sep 08</p>

                  </div>
                </li>
                <li>
                  <div className="Card">
                    <span
                                         className='trending_span'

                    >
                      <img src={xyz} alt="Avatar" class="avatar" />
                      <p style={{ paddingLeft: "12px" }}>
                        Andrei Tapalaga ✒️ in History of Yesterday
                      </p>
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <img src={abc} alt="Avatar" class="avatar1" />

                      <p style={{ paddingLeft: "10px" }}>
                        {" "}
                        Chernobyl’s Blown Up Reactor 4 Just Woke Up
                      </p>
                    </div>
                    <p style={{ paddingTop: "1rem" }}>Sep 08</p>

                  </div>
                </li>
              </div>
            </ol>
          </div>
        </div>
      </div>
      <div className="container-fluid w-100 vh-70 p-3 mt-3">
     <div className="row">
     <div className="col-lg-7">
     <div className="row">
      <div className="col-lg-12 col-sm-6">
        <BlogCard/>
      </div>
      <div className="col-lg-12 col-sm-6">
        <BlogCard/>
      </div>
      <div className="col-lg-12 col-sm-6">
        <BlogCard/>
      </div>
      <div className="col-lg-12 col-sm-6">
        <BlogCard/>
      </div>
      <div className="col-lg-12 col-sm-6">
        <BlogCard/>
      </div>
      </div>
     </div>
     <div className="col-lg-5">
     <div className="row">
      <div className="col-lg-12 col-sm-6">
        <BlogCard/>
      </div>
      <div className="col-lg-12 col-sm-6">
        <BlogCard/>
      </div>
      <div className="col-lg-12 col-sm-6">
        <BlogCard/>
      </div>
      <div className="col-lg-12 col-sm-6">
        <BlogCard/>
      </div>
      <div className="col-lg-12 col-sm-6">
        <BlogCard/>
      </div>
      </div>
     </div>
     </div>
      </div>
    </div>
  );
};

export default Landingpage;