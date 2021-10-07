import { blogTypes } from "../actions/actiontypes"



const initialState = {

    latestblogs : ""
}


export function blog(state = initialState , action){

    switch(action.type){

        case blogTypes.ALL_POSTS : 
        return{
            ...state , 
            latestblogs : action.payload
        }
        default : 
        return state ; 

    }
}