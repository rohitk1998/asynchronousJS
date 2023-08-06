import React from "react";
import Navbar from "./navbar";
import MenuBar from "./fullbar";
import { useSelector } from "react-redux";
import AppFooter from "./footer";

const Layout = ({ children }) => {
  const showmenu = useSelector((state) => state.user.menustate);
  return (
    <>
      {showmenu ? (
          <MenuBar />
      ) : (
          <>
          <Navbar />
          <div className="app-main-content">
            <div className="main-content">{children}</div>
          </div>
          <AppFooter />
          </>
      )}
    </>
  );
};

export default Layout;
