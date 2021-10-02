import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SHOW_SIGNIN_POPUP } from "../../redux/actioncreator/types";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import TrendingTopices from "./trendingpoices";
import MainContent from "./maincontent";
import ProgrammingTopices from "./programmingtopices";

const Landingpage = () => {
  const disptach = useDispatch();

  const { loading, error, data } = useQuery(gql`
    query getBlogList {
      getBlogList {
        blog_title
        blog_readtime
        blog_body
        blog_category
        blog_thumbnail
      }
    }
  `);

  console.log("data", data);

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
