import { userTypes, blogTypes } from "./actiontypes";

const menuAction = (payload) => {
  return {
    type: userTypes.SHOW_HIDE_MENU,
    payload
  };
};

const singupAction = (payload) => {
    return {
      type: userTypes.SHOW_SIGNIN_POPUP,
      payload
    };
  };

  const getlatestblogaction = (payload)=> {
    console.log("action call")
      return{
          type : blogTypes.FETCH_POSTS,
          payload
      }
  }

  export {

    menuAction,
    singupAction , 
    getlatestblogaction
  }
  