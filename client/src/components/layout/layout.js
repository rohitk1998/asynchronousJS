import React , { useEffect } from "react";
import Navbar from "./navbar";
import MenuBar from "./fullbar";
import { useDispatch , useSelector } from "react-redux"
import AppFooter from "./footer";


const Layout = ({ children }) => {


  const showmenu = useSelector((state)=> state.user.menustate )

  useEffect(()=>{
  //  console.log(showmenu)
  },[showmenu])

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
          <AppFooter/>
        </div>
      )}
    </>
  );
};

export default Layout;
