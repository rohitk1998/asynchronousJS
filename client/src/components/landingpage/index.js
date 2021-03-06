import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrendingTopices from "./trendingpoices";
import MainContent from "./maincontent";
import ProgrammingTopices from "./programmingtopices";
import { getlatestblogaction } from "../../redux/actions/useraction";

const Landingpage = () => {

  const disptach = useDispatch();
  const all_blogs = useSelector((state)=> state.blogs.latestblogs)

  useEffect(() => {
    disptach(getlatestblogaction());
  }, []);

  useEffect(()=>{
  // console.log(all_blogs)
  },[all_blogs])

  const data = all_blogs;

  return (
    <>
      <div className="container-fluid">
        <MainContent />
      </div>
      <TrendingTopices data={data} />
      <ProgrammingTopices data={data} />
    </>
  );
};

export default Landingpage;
