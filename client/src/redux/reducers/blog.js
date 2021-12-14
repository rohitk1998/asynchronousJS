import { blogTypes } from "../actions/actiontypes"



const initialState = {

    latestblogs : "",
    post_details : ""
}


export function blog(state = initialState , action){

    switch(action.type){

        case blogTypes.ALL_POSTS : 
        return{
            ...state , 
            latestblogs : action.payload
        }
        case blogTypes.SAVE_POST_DETAILS : 
        return{
            ...state , 
            post_details : action.payload
        }
        default : 
        return state ; 

    }
}