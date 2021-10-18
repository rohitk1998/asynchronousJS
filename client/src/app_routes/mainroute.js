import { Redirect } from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/landingpage"
import Next from '../pages/NextPage'
import NothingFoundError from "../components/common/ErrorPages/404page"
import EmptyLayout from "../components/layout/emptylayout"
export const homeRoute = [

    {
        path : '/' , 
        exact : true , 
        layout : Layout , 
        component: Home,
    },
      {
          path:'/next',
          layout:Layout,
          component:Next
      },
      {
          path:'/404',
          exact:true,
          layout:EmptyLayout , 
          component:NothingFoundError
      }
   
]



export const mainRoute = [ ...homeRoute ]