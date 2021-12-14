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
      return{
          type : blogTypes.FETCH_POSTS,
          payload
      }
  }

  const getPostDataByPostID = (payload)=> {
      return{
          type : blogTypes.GET_POST_BY_POST_ID,
          payload
      }
  }

  export {

    menuAction,
    singupAction , 
    getlatestblogaction,
    getPostDataByPostID
  }
  