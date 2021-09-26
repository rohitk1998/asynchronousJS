import React from "react";
import Navbar from "./navbar";
import MenuBar from "./fullbar";

const Layout = ({ children }) => {
  const [showmenu, setShowMenu] = React.useState(false);

  const showFullBar = () => {
    setShowMenu(!showmenu);
  };

  return (
    <>
      {showmenu ? (
        <div>
          <MenuBar showMenuCallbackFunc={showFullBar} />
        </div>
      ) : (
        <div>
          <Navbar showMenuCallbackFunc={showFullBar} />
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
