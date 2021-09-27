import { call, put, takeEvery } from 'redux-saga/effects'
import { all } from 'redux-saga/effects';
import { getAsyncResponse } from "../../services/fetch.services"
import { GET_ALLBUMS_FAILED , GET_ALLBUMS_REQUESTED , GET_ALLBUMS_SUCCESS, GET_USERS_SUCCESS} from './types';

const apiUrl = `https://jsonplaceholder.typicode.com`;
function getApi() {
  return getAsyncResponse('get' , apiUrl , '/users' , null )
    .then(response => response.data )
    .catch((error) => {throw error})
}

function* fetchUsers(action) {
   try {
      const users = yield call(getApi);

      console.log("user" , users )
      yield put({type: 'GET_USERS_SUCCESS', users: users});
   } catch (e) {
      yield put({type: 'GET_USERS_FAILED', message: e.message});
   }
}

// function* userSaga() {
//    yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
// }


function getAllbumsData(){
    console.log("sfdsdfds")
   return getAsyncResponse('get' , apiUrl , '/albums' , null )
   .then(response => response.data)
    .catch((error) => {throw error})
}

function* fetchAllbums(){
   console.log("running fetch saga ")
   try{
      const albums = yield call(getAllbumsData)
      yield put({ type : GET_ALLBUMS_SUCCESS , allbums : albums })
   }
   catch(error){
      yield put({ type : GET_ALLBUMS_FAILED , message : error.message  })
   }
}


// function* allbumSaga(){

//    yield takeEvery( GET_ALLBUMS_REQUESTED , fetchAllbums )
   
// }


function* userSaga(){

   yield takeEvery( GET_ALLBUMS_REQUESTED , fetchAllbums )
   yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}




export default function* rootSaga() {
    yield all([
      userSaga(),
      // allbumSaga(),
    ])
  }

