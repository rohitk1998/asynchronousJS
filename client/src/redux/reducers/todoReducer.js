import {
    GET_USERS_REQUESTED , 
    GET_USERS_SUCCESS , 
    GET_USERS_FAILED ,
} from "../actioncreator/types";


const initialState = {
    users: [],
    loading: false,
    error: null,
  }
  
  export default function usersReducer(state = initialState, action) {


    console.log("action.payload" , action.payload)


    switch (action.type) {
      case GET_USERS_REQUESTED:
        return {
          ...state,
          loading: true,
        }
      case GET_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.users
        }
      case GET_USERS_FAILED:
        return {
          ...state,
          loading: false,
          error: action.message,
        }
      default:
        return state
    }

  }