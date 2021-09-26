import { Redirect } from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/landingpage"

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
      }
]



export const mainRoute = [ ...homeRoute ]