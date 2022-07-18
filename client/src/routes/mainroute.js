import { Redirect } from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/landingpage/landingpage";
import TrendingBlogDetails from "../pages/detailpage/TrendingBlogDetails";
import NothingFoundError from "../components/common/ErrorPages/404page";
import EmptyLayout from "../components/layout/emptylayout";

export const homeRoute = [
  {
    path: "/",
    exact: true,
    layout: Layout,
    component: Home,
  },
  {
    path: "/trending",
    layout: Layout,
    component: TrendingBlogDetails,
  },
  {
    path: "/404",
    exact: true,
    layout: EmptyLayout,
    component: NothingFoundError,
  },
];

export const mainRoute = [...homeRoute];
