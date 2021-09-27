import {
    GET_ALLBUMS_REQUESTED , 
    GET_ALLBUMS_SUCCESS , 
    GET_ALLBUMS_FAILED
} from "../actioncreator/types"



const initialState = {
    loading : false , 
    allbums : [] , 
    error : '' , 
    message : ''
}


export const allbumReducer  = (state  = initialState , action)=> {

    switch (action.type) {
        case GET_ALLBUMS_REQUESTED:
          return {
            ...state,
            loading: true,
          }
        case GET_ALLBUMS_SUCCESS:
          return {
            ...state,
            loading: false,
            allbums : action.allbums
          }
        case GET_ALLBUMS_FAILED:
          return {
            ...state,
            loading: false,
            error: action.message,
          }
        default:
          return state
      }
}