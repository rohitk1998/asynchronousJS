import React from "react";
import Navbar from "./navbar";
import MenuBar from "./fullbar";
import { useSelector } from "react-redux";
import AppFooter from "./footer";
import SideBar from "./sidebar";

const Layout = ({ children }) => {
  const showmenu = useSelector((state) => state.user.menustate);
  return (
    <>
      {showmenu ? (
        <div>
          <MenuBar />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="app-main-content">
          <SideBar/>
          <div className="main-content">
          {children}
          </div>
          </div>
           <AppFooter/>
        </div>
      )}
    </>
  );
};

export default Layout;
