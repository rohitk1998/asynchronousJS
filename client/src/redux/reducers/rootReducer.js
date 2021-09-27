import usersReducer  from "../reducers/todoReducer"
import { combineReducers } from "redux"
import { allbumReducer } from "./allbumReducer"


export const rootReducer = combineReducers({

    user :usersReducer , 
    allbums : allbumReducer , 
})