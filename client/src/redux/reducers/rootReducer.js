import { combineReducers } from "redux"
import  showmenuReducer  from "./showmenu"


export const rootReducer = combineReducers({

    showmenu :showmenuReducer , 
})