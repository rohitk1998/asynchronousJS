import React from "react";
import Navbar from "./navbar";
import MenuBar from "./fullbar";
import { useDispatch , useSelector } from "react-redux"


const Layout = ({ children }) => {


  const showmenu = useSelector((state)=> state.showmenu.state)

  // console.log("showmenu" , showmenu)

  return (
    <>
      {showmenu ? (
        <div>
          <MenuBar/>
        </div>
      ) : (
        <div>
          <Navbar/>
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
