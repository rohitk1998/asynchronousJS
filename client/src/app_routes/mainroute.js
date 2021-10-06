import { Redirect } from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/landingpage"
import Next from '../pages/NextPage'
export const homeRoute = [

    {
        path : '/' , 
        exact : true , 
        layout : Layout , 
        component : ()=> <Redirect to="/login" />
    },
    {
        path: "/home",
        layout: Layout,
        component: Home,
      },
      {
          path:'/next',
          layout:Layout,
          component:Next
      }
   
]



export const mainRoute = [ ...homeRoute ]