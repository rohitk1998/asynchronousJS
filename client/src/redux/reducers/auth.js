import * as type from "../actions/actiontypes";


const initialState = {
    user : ""
}

export function authReducer(authState=initialState,action){
    switch(action.type){
           case type.authTypes.SAVE_USER : 

           return{
            ...authState , 
            user : action.userpayload
           }

           default : 

           return authState
    }
}