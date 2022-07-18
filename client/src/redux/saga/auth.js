import {
    call,
    put,
    takeLatest,
  } from "../../Common/files";
import * as service from "../../services/authservice";
import * as type from "../actions/actiontypes";

function* postUser(action){
  console.log("calling post user saga",action);
  try{
    const response =   yield call(service.postUser , action.payload, null)
    console.log("response posting user data",response);
      yield put({type : type.authTypes.SAVE_USER , payload : response.data } )
  }
  catch(error){
      console.log("err" , error)
  }
}


export const  LatestAuthWatcher = function* (){
  yield takeLatest(type.authTypes.REGISTER_USER, postUser);
}