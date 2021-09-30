import { combineReducers } from "redux"
import  showmenuReducer  from "./showmenu"
import showsigninReducer from "./showSignIn"
export const rootReducer = combineReducers({

    showmenu :showmenuReducer , 
    showSignIn :showsigninReducer
})