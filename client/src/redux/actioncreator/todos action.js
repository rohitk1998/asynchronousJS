import { call, put, takeEvery } from 'redux-saga/effects'
import { all } from 'redux-saga/effects';
import { getAsyncResponse } from "../../services/fetch.services"
import {SHOW_HIDE_MENU} from "./types"
import {SHOW_SIGNIN_POPUP} from './types'


function* ShowMenu(){
   yield ({type : SHOW_HIDE_MENU })
}


function* menuSaga(){
   yield takeEvery({type : SHOW_HIDE_MENU} , ShowMenu)
}

function* ShowSignInPopup(){
   yield({type:SHOW_SIGNIN_POPUP})
}
function* userSaga(){
yield takeEvery({type:SHOW_SIGNIN_POPUP},ShowSignInPopup)
}

export default function* rootSaga(){
     yield all[
        menuSaga(),
        userSaga()
     ]
}