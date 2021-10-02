/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Landingpage from "../components/landingpage";
// import { useDispatch , useSelector } from "react-redux"

// import Signpopup from "../components/layout/POPUP/Signpopup";

const Home = ({children})=> {
  // const showsignin = useSelector((state)=> state.showSignIn.state)

  return (
    <div className='landing-page'>
          <Landingpage/>
    </div>
  )
}

export default Home;
